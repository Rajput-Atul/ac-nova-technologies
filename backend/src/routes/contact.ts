import express from "express";
import { body, validationResult } from "express-validator";
import nodemailer from "nodemailer";

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  if (!text) return "";
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const router = express.Router();

const contactSchema = {
  name: { required: true, minLength: 2 },
  email: { required: true, isEmail: true },
  phone: { required: true, minLength: 10 },
  service: { required: true },
  message: { required: true, minLength: 10 },
};

router.post(
  "/",
  [
    body("name").trim().notEmpty().isLength({ max: 100 }).withMessage("Name is required and must be less than 100 characters"),
    body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
    body("phone").trim().notEmpty().matches(/^[0-9+\-() ]{7,20}$/).withMessage("Valid phone is required"),
    body("service").trim().notEmpty().isLength({ max: 100 }).withMessage("Service is required"),
    body("message").trim().notEmpty().isLength({ min: 10, max: 5000 }).withMessage("Message must be between 10 and 5000 characters"),
    body("company").optional().trim().isLength({ max: 100 }).withMessage("Company must be less than 100 characters"),
    body("budget").optional().trim().isLength({ max: 50 }).withMessage("Budget must be less than 50 characters"),
  ],
  async (req: express.Request, res: express.Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        });
      }

      const { name, email, phone, company, service, budget, message } = req.body;

      // Check honeypot
      if (req.body.honeypot || req.body.website) {
        return res.status(200).json({ success: true, message: "Message received" });
      }

      // Configure email transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        // Enable TLS verification - DO NOT disable in production
        tls: {
          rejectUnauthorized: true,
        },
      });

      // Admin notification email
      const adminMailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission - ${escapeHtml(service)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Budget:</strong> ${escapeHtml(budget || "N/A")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      };

      // User confirmation email
      const userMailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Thank you for contacting TechCraft Solutions",
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <p>Here's what you submitted:</p>
          <ul>
            <li><strong>Service:</strong> ${escapeHtml(service)}</li>
            <li><strong>Budget:</strong> ${escapeHtml(budget || "Not specified")}</li>
          </ul>
          <p>Best regards,<br>TechCraft Solutions Team</p>
        `,
      };

      // Send emails
      try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
      } catch (emailError: any) {
        console.error("Email sending failed (not logged with PII)");
        // Don't expose email error details to user
        throw new Error("Failed to send confirmation email");
      }

      res.status(200).json({
        success: true,
        message: "Thank you! We will contact you soon.",
      });
    } catch (error: any) {
      // Log error without PII
      const errorMessage = error?.message || "Unknown error";
      console.error("[SECURITY] Contact form error:", errorMessage.substring(0, 50));
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  }
);

export default router;