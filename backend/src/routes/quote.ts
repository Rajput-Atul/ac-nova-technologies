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

router.post(
  "/",
  [
    body("name").trim().notEmpty().isLength({ max: 100 }).withMessage("Name is required"),
    body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
    body("phone").trim().notEmpty().matches(/^[0-9+\-() ]{7,20}$/).withMessage("Valid phone is required"),
    body("businessType").trim().notEmpty().isLength({ max: 100 }).withMessage("Business type is required"),
    body("projectType").trim().notEmpty().isLength({ max: 100 }).withMessage("Project type is required"),
    body("timeline").optional().trim().isLength({ max: 50 }).withMessage("Timeline must be less than 50 characters"),
    body("message").optional().trim().isLength({ max: 5000 }).withMessage("Message must be less than 5000 characters"),
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

      const { name, email, phone, businessType, projectType, features, timeline, message } = req.body;

      if (req.body.honeypot || req.body.website) {
        return res.status(200).json({ success: true, message: "Quote request received" });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: true,
        },
      });

      const adminMailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `New Quote Request - ${escapeHtml(projectType)}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Business Type:</strong> ${escapeHtml(businessType)}</p>
          <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
          <p><strong>Features:</strong> ${escapeHtml(Array.isArray(features) ? features.join(", ") : features || "N/A")}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(timeline || "N/A")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message || "N/A").replace(/\n/g, "<br />")}</p>
        `,
      };

      const userMailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Thank you for your quote request - TechCraft Solutions",
        html: `
          <h2>Thank you for requesting a quote!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>We've received your quote request and will prepare a detailed proposal for you within 24-48 hours.</p>
          <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
          <p><strong>Business Type:</strong> ${escapeHtml(businessType)}</p>
          <p>If you have any questions, feel free to reach out to us directly.</p>
          <p>Best regards,<br>TechCraft Solutions Team</p>
        `,
      };

      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);

      res.status(200).json({
        success: true,
        message: "Quote request received! We'll get back to you within 24-48 hours.",
      });
    } catch (error: any) {
      // Log error without PII
      const errorMessage = error?.message || "Unknown error";
      console.error("[SECURITY] Quote request error:", errorMessage.substring(0, 50));
      res.status(500).json({
        success: false,
        message: "Failed to submit quote request. Please try again.",
      });
    }
  }
);

export default router;