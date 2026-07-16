import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// HTML escape function to prevent XSS - using char codes to avoid auto-format issues
function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&#38;")
    .replace(/</g, "&#60;")
    .replace(/>/g, "&#62;")
    .replace(/"/g, "&#34;")
    .replace(/'/g, "&#39;");
}

// Allowed origins for CORS
const allowedOrigins = [
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  "http://localhost:3000",
  "https://acnovatech.com",
  "https://www.acnovatech.com",
];

function createCorsHeaders(request: NextRequest): HeadersInit {
  const origin = request.headers.get("origin");

  if (origin && allowedOrigins.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "OPTIONS, POST",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
    };
  }

  return {
    "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "Access-Control-Allow-Methods": "OPTIONS, POST",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
  };
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: createCorsHeaders(request),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Message received" },
        { headers: createCorsHeaders(request) }
      );
    }

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json(
        { success: false, message: "Please enter your name." },
        { status: 400, headers: createCorsHeaders(request) }
      );
    }
    if (!email || typeof email !== "string" || !email.includes("@") || email.length > 254) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400, headers: createCorsHeaders(request) }
      );
    }
    if (!phone || typeof phone !== "string" || phone.length < 7 || phone.length > 20) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid phone number." },
        { status: 400, headers: createCorsHeaders(request) }
      );
    }
    if (!service || typeof service !== "string" || service.trim().length === 0 || service.length > 100) {
      return NextResponse.json(
        { success: false, message: "Please select a service." },
        { status: 400, headers: createCorsHeaders(request) }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Please enter a message (at least 10 characters)." },
        { status: 400, headers: createCorsHeaders(request) }
      );
    }
    if (company && (typeof company !== "string" || company.length > 100)) {
      return NextResponse.json(
        { success: false, message: "Invalid company name." },
        { status: 400, headers: createCorsHeaders(request) }
      );
    }
    if (budget && (typeof budget !== "string" || budget.length > 50)) {
      return NextResponse.json(
        { success: false, message: "Invalid budget." },
        { status: 400, headers: createCorsHeaders(request) }
      );
    }

    // Check SMTP configuration
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!smtpUser || !smtpPass || !adminEmail) {
      console.error("[ERROR] SMTP not configured - missing SMTP_USER, SMTP_PASS, or ADMIN_EMAIL");
      return NextResponse.json(
        { success: false, message: "Failed to send message. Email service is not configured. Please contact us directly." },
        { status: 500, headers: createCorsHeaders(request) }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Attempt to send directly (skip verify() as it can be flaky with Gmail)
    // If sending fails, log the contact data so it's not lost

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company || "N/A");
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget || "N/A");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    // Admin notification email
    const adminMailOptions = {
      from: `"AC Nova Technologies" <${smtpUser}>`,
      to: adminEmail,
      subject: `New Contact: ${safeService} - ${safeName}`,
      html: [
        "<h2>New Contact Form Submission</h2>",
        "<table style='border-collapse:collapse;width:100%;max-width:600px;'>",
        "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Name</td><td style='padding:8px;border:1px solid #ddd;'>" + safeName + "</td></tr>",
        "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Email</td><td style='padding:8px;border:1px solid #ddd;'>" + safeEmail + "</td></tr>",
        "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Phone</td><td style='padding:8px;border:1px solid #ddd;'>" + safePhone + "</td></tr>",
        "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Company</td><td style='padding:8px;border:1px solid #ddd;'>" + safeCompany + "</td></tr>",
        "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Service</td><td style='padding:8px;border:1px solid #ddd;'>" + safeService + "</td></tr>",
        "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Budget</td><td style='padding:8px;border:1px solid #ddd;'>" + safeBudget + "</td></tr>",
        "</table>",
        "<h3>Message:</h3>",
        "<p style='background:#f5f5f5;padding:12px;border-radius:4px;'>" + safeMessage + "</p>",
      ].join("\n"),
    };

    // User confirmation email
    const userMailOptions = {
      from: `"AC Nova Technologies" <${smtpUser}>`,
      to: email,
      subject: "Thank you for contacting AC Nova Technologies",
      html: [
        "<div style='max-width:600px;margin:0 auto;font-family:Arial,sans-serif;'>",
        "<h2 style='color:#4f46e5;'>Thank you for reaching out!</h2>",
        "<p>Hi " + safeName + ",</p>",
        "<p>We've received your message and will get back to you within <strong>24 hours</strong>.</p>",
        "<p>Here's what you submitted:</p>",
        "<ul>",
        "<li><strong>Service:</strong> " + safeService + "</li>",
        "<li><strong>Budget:</strong> " + escapeHtml(budget || "Not specified") + "</li>",
        "</ul>",
        "<hr style='border:none;border-top:1px solid #eee;margin:20px 0;' />",
        "<p style='color:#666;font-size:12px;'>AC Nova Technologies | Mumbai, India</p>",
        "</div>",
      ].join("\n"),
    };

    // Send emails
    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
    } catch (emailError: any) {
      console.error("[ERROR] Email sending failed:", emailError?.message || "Unknown error");
      return NextResponse.json(
        { success: false, message: "Failed to send message. Email service is temporarily unavailable. Please try again later or contact us directly." },
        { status: 500, headers: createCorsHeaders(request) }
      );
    }

    return NextResponse.json(
      { success: true, message: "Thank you! We will contact you soon." },
      { headers: createCorsHeaders(request) }
    );
  } catch (error: any) {
    console.error("[ERROR] Contact API error occurred");
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500, headers: createCorsHeaders(request) }
    );
  }
}
