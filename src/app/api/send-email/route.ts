import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { formType, data } = await req.json();

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";
    const receiver = process.env.RECEIVER_EMAIL;

    if (!host || !user || !pass || !receiver) {
      console.error("Missing SMTP configuration in environment variables.");
      return NextResponse.json(
        { error: "SMTP configuration is incomplete. Please check server settings." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    let subject = "";
    let htmlContent = "";

    if (formType === "admissions") {
      subject = `New Admission Enquiry - ${data.name} (${data.course})`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #F0EDE6; border-radius: 12px; padding: 24px; color: #1C2D42;">
          <h2 style="color: #013a7d; font-size: 20px; border-bottom: 2px solid #D4AF37; padding-bottom: 8px; margin-top: 0;">New Admission Enquiry</h2>
          <p>You have received a new admission registration form from the website:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6; width: 140px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6;">Phone Number:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;">${data.email || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6;">Preferred College:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;">${data.college}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6;">Preferred Course:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;">${data.course}</td>
            </tr>
          </table>
          <div style="background-color: #FAF9F6; padding: 16px; border-radius: 8px; border: 1px solid #F0EDE6;">
            <strong style="display: block; margin-bottom: 6px;">Additional Message:</strong>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${data.message || 'No additional message was provided.'}</p>
          </div>
          <p style="font-size: 11px; color: #7E93A8; margin-top: 24px; text-align: center; border-top: 1px solid #F0EDE6; padding-top: 12px;">
            This email was automatically generated from the Jagannath Group Admissions Portal.
          </p>
        </div>
      `;
    } else {
      subject = `New Contact Query: ${data.subject || 'General Enquiry'}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #F0EDE6; border-radius: 12px; padding: 24px; color: #1C2D42;">
          <h2 style="color: #013a7d; font-size: 20px; border-bottom: 2px solid #D4AF37; padding-bottom: 8px; margin-top: 0;">New Website Query</h2>
          <p>You have received a new message from the contact form:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6; width: 140px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6;">Phone Number:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #FAF9F6;">Subject:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #FAF9F6;">${data.subject || 'N/A'}</td>
            </tr>
          </table>
          <div style="background-color: #FAF9F6; padding: 16px; border-radius: 8px; border: 1px solid #F0EDE6;">
            <strong style="display: block; margin-bottom: 6px;">Message:</strong>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${data.message}</p>
          </div>
          <p style="font-size: 11px; color: #7E93A8; margin-top: 24px; text-align: center; border-top: 1px solid #F0EDE6; padding-top: 12px;">
            This email was automatically generated from the Jagannath Group Contact Form.
          </p>
        </div>
      `;
    }

    await transporter.sendMail({
      from: `"${data.name}" <${user}>`,
      to: receiver,
      replyTo: data.email || undefined,
      subject,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email via SMTP:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
