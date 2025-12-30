import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { ContactFormValues } from '@/components/sections/contact-section'; // Assuming you export this type

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = (await request.json()) as ContactFormValues;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Debug logging
    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      sender: process.env.SMTP_SENDER_EMAIL,
      recipient: process.env.RECIPIENT_EMAIL
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'tuffneelanjanv@gmail.com',
        pass: 'sqph zvzq xjqd dxze',
      },
      tls: {
        rejectUnauthorized: true,
      }
    });

    const mailOptions = {
      from: `"${name} (Portfolio Contact)" <${process.env.SMTP_SENDER_EMAIL || process.env.SMTP_USER}>`, // Verified sender email or your SMTP user
      replyTo: email, // User's email address
      to: process.env.RECIPIENT_EMAIL, // Your email address to receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p>You have a new contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ message: 'Failed to send email.', error: errorMessage }, { status: 500 });
  }
}
