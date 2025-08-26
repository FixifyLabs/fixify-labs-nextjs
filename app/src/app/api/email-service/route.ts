import { NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!process.env.SENDGRID_API_KEY) {
        return NextResponse.json({ error: "SendGrid API key not configured" }, { status: 500 });
    }
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const subject = "New Contact Form Submission";

    // Validate the request body
    if (!email || !name || !phone || !message) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const text = `You have a new contact form submission:

    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
    `;

    // Send the email using SendGrid
    try {
        const toEmail = 'armando@fixifylabs.com';
        await sendEmail(toEmail, subject, text);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}

async function sendEmail(to: string, subject: string, text: string) {
    const msg = {
        to,
        from: "info@fixifylabs.com",
        subject,
        text,
    };
    await sgMail.send(msg);
}
