import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	})
);

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
	service: "gmail", // Use your email provider
	auth: {
		user: process.env.EMAIL, // Your email
		pass: process.env.PASSWORD, // App password
	},
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
