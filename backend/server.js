import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post(`${process.env.REACT_APP_API_URL}/submit`, async (req, res) => {
  const { name, email, phone, domain } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    // Create transporter with environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to Admin
    const adminMail = {
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: "New Form Submission",
      html: `
        <h2>New Submission</h2>
        <p><strong>Domain:</strong> ${domain}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    // Auto-reply to user
    const userMail = {
      from: '"No Reply" <noreply@pro-digger.com>',
      to: email,
      subject: "We’ve received your submission",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for submitting your details. Please wait for 24 hours — our team will get back to you soon.</p>
        <p>Regards,<br>Namma Yatri Campus Hiring Team</p>
      `,
    };

    console.log("Attempting to send emails...");

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    console.log("Emails sent successfully!");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
