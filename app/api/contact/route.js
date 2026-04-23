// app/api/contact/route.js
// Email API route using Nodemailer
// Requires environment variables: EMAIL_USER, EMAIL_PASS, EMAIL_TO

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // ── Validation ──
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    // ── Nodemailer Transporter ──
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS?.replace(/\s+/g, ''), // Strip spaces from App Password
      },
      tls: {
        rejectUnauthorized: false, // Fix for "self-signed certificate in certificate chain"
      },
    });

    // ── Email Content ──
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; background: #030610; color: #e2e8f0; padding: 40px;">
            <div style="max-width: 600px; margin: 0 auto; background: #0d1530; border-radius: 16px; border: 1px solid rgba(0,245,255,0.2); overflow: hidden;">
              <div style="background: linear-gradient(135deg, #00f5ff20, #8b5cf620); padding: 30px; border-bottom: 1px solid rgba(0,245,255,0.1);">
                <h1 style="color: #00f5ff; margin: 0; font-size: 24px;">New Contact Message</h1>
                <p style="color: #94a3b8; margin: 8px 0 0;">From your portfolio website</p>
              </div>
              <div style="padding: 30px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; color: #64748b; width: 100px; vertical-align: top; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                    <td style="padding: 12px 0; color: #e2e8f0; font-size: 16px; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #64748b; vertical-align: top; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                    <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #00f5ff; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #64748b; vertical-align: top; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</td>
                    <td style="padding: 12px 0; color: #e2e8f0; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</td>
                  </tr>
                </table>
              </div>
              <div style="padding: 20px 30px; background: rgba(0,245,255,0.03); border-top: 1px solid rgba(0,245,255,0.1);">
                <p style="color: #475569; font-size: 12px; margin: 0;">Sent from satyaprakash.dev • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Portfolio Message from ${name}

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio website
      `.trim(),
    };

    // ── Send Email ──
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully! I\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email me directly.' },
      { status: 500 }
    );
  }
}
