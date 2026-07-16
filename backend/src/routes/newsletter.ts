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
  [body("email").isEmail().normalizeEmail().isLength({ max: 254 }).withMessage("Valid email is required")],
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

      const { email } = req.body;

      if (req.body.honeypot || req.body.website) {
        return res.status(200).json({ success: true, message: "Subscribed successfully" });
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
        subject: "New Newsletter Subscription",
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p>Someone has subscribed to your newsletter!</p>
        `,
      };

      const userMailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Welcome to TechCraft Solutions Newsletter",
        html: `
          <h2>Thank you for subscribing!</h2>
          <p>You've successfully subscribed to the TechCraft Solutions newsletter.</p>
          <p>You'll receive updates about our services, tips for growing your business, and exclusive offers.</p>
          <p>Best regards,<br>TechCraft Solutions Team</p>
        `,
      };

      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);

      res.status(200).json({
        success: true,
        message: "Subscribed successfully! Thank you.",
      });
    } catch (error: any) {
      // Log error without PII
      const errorMessage = error?.message || "Unknown error";
      console.error("[SECURITY] Newsletter subscription error:", errorMessage.substring(0, 50));
      res.status(500).json({
        success: false,
        message: "Failed to subscribe. Please try again.",
      });
    }
  }
);

export default router;