import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const env = config().parsed || {};
const NODE_ENV = env.NODE_ENV || "development";
const CLIENT_URL = env.CLIENT_URL;
const EMAIL = env.EMAIL;
const PASSWORD = env.PASSWORD;
const PORT = env.PORT || 3001;

const app = express();

// Security and optimization middleware
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  next();
});

// CORS configuration for production and development
app.use(
  cors({
    origin: NODE_ENV === "production" 
      ? [CLIENT_URL, "https://yourdomain.com"] // Replace with your actual domain
      : ["http://localhost:5173", "http://localhost:5174", CLIENT_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
	service: "gmail", // Use your email provider
	auth: {
		user: EMAIL, // Your email
		pass: PASSWORD, // App password
	},
});

app.get("/", (req, res) => {
	res.send("Hello from the server!");
});

app.post("/send-email", async (req, res) => {
	const { name, email, message } = req.body;

	try {
		await transporter.sendMail({
			from: process.env.EMAIL, // Your email (so it doesn’t get blocked)
			to: process.env.EMAIL, // Email where you receive messages
			subject: `New Message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
			html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #4CAF50;">New Message from ${name}</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50;">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
                        ${message.replace(/\n/g, "<br>")}
                    </div>
                </div>
            `,
			replyTo: email, // Allows you to reply directly to the user’s email
		});

		res
			.status(200)
			.json({ success: true, message: "Message sent successfully!" });
	} catch (error) {
		res
			.status(500)
			.json({ success: false, message: "Email sending failed!", error });
	}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
