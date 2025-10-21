import nodemailer from "nodemailer";
// alsn eotc myxl qybl
// jdpl yebm zidh iugw
const candidateName = "Chellannagari Bhuvana";
const candidateEmail = "bhuvanach07@gmail.com"; // Replace with the candidate's email
const assessmentLink = "https://maanas-kaniti.github.io/new-/";
async function sendTestMail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nammayatri2025@gmail.com", // your admin email
      pass: "alsn eotc myxl qybl", // Gmail App Password
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"No Reply" <noreply@website.com>',
      to: candidateEmail, // admin email
      subject: "Test Email",
      html: `
        <p>Hi ${candidateName},</p>

        <p>Greetings from <strong>Namma Yatri Campus Hiring Team</strong>. You are now invited to take your <strong>Round 1 Assessment</strong>.</p>

        <p>Please find your assessment details below:</p>
        <ul>
          <li><strong>Test Name:</strong> MCQs and Coding Assessment</li>
          <li><strong>Test Duration:</strong> 30 min</li>
        </ul>

        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Please begin the assessment only after ensuring you're using the latest version of Google Chrome. Use Incognito mode on desktops/laptops.</li>
          <li>Make sure your laptop/desktop has good internet connection speed before starting.</li>
          <li>Allow camera permissions in your browser as you will be monitored throughout the assessment.</li>
          <li>If your face is not clearly visible or if indulging in unfair practices, you will be eliminated.</li>
          <li>Assessment will be in full-screen mode. Exiting full-screen or switching browsers will auto-submit your test.</li>
          <li>Once started, the timer begins and you need to submit within allocated time.</li>
          <li>Assessment includes MCQs and coding questions, duration: 70 minutes.</li>
        </ol>

        <p><strong>Important:</strong> The assessment must be completed within this time window only.</p>
    
        <p><strong>Assessment Window:</strong> 18 Oct 2025 17:00 IST to 18 Oct 2025 18:00 IST (24-hour format)</p>
        <p style="text-align:center; margin-top:30px;">
          <a href="${assessmentLink}?email=${encodeURIComponent(
        candidateEmail
      )}"
             style="
               display: inline-block;
               padding: 12px 25px;
               font-size: 16px;
               color: white;
               background-color: #28a745;
               text-decoration: none;
               border-radius: 5px;
             ">
             Take Assessment
          </a>
        </p>


        <p><strong>Process Ahead:</strong></p>
        <ol>
          <li>Shortlisted candidates will be invited to a one-way video interview along with role-aligned tasks or coding challenges, followed by 2–3 technical discussions and an HR interview.</li>
          <li>Your placement team will be informed of the final result.</li>
          <li>The selection process usually takes 2-3 weeks. Our team will guide and update you at every stage.</li>
        </ol>

        
        <p>Best Regards,<br/>Namma Yatri Campus Hiring Team</p>
      `,
    });

    console.log("Email sent: " + info.response);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

sendTestMail();
