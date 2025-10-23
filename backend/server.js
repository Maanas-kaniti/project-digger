import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configure SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/submit", async (req, res) => {
  const { name, email, phone, domain } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    // Email to Admin
    const adminMsg = {
      to: process.env.ADMIN_EMAIL, // Your admin email
      from: process.env.SENDER_EMAIL, // Verified sender in SendGrid
      subject: `New Form Submission from ${name}`,
      html: `
        <h2>New Submission</h2>
        <p><strong>Domain:</strong> ${domain}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    // Auto-reply to User
    const userMsg = {
      to: email,
      from: process.env.SENDER_EMAIL,
      subject: "We’ve received your submission",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for submitting your details. Please wait for 24 hours — our team will get back to you soon.</p>
        <p>Regards,<br>Project-Digger Team</p>
      `,
    };

    console.log("Attempting to send emails via SendGrid...");

    await sgMail.send(adminMsg);
    await sgMail.send(userMsg);

    console.log("Emails sent successfully!");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Serve frontend build (React)
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
