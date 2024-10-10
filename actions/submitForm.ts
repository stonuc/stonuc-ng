"use server";

import { sendMail } from "@/lib/mailTrap";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      "Invalid phone number (e.g  +234 810 409 2397)"
    ),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});
const formApp = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  surnname: z.string().min(2, "Surname must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      "Invalid phone number (e.g  +234 810 409 2397)"
    ),
});

export async function submitContactForm(formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #444;
          font-size: 24px;
        }
        .section {
          margin-bottom: 20px;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .section h2 {
          margin-top: 0;
          font-size: 18px;
          color: #555;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>New Contact Form Submission</h1>
        <p>You have received a new message from the contact form on your website.</p>
        
        <div class="section">
          <h2>Contact Details:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
        
        <div class="section">
          <h2>Message:</h2>
          <p>${message}</p>
        </div>
        
        <div class="footer">
          <p>This email was sent from the contact form on your website.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await sendMail({
      subject: `New contact form submission from ${name}`,
      html: emailHtml,
    });
    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}

type Attachment = {
  filename: string;
  content: string;
}[];

export async function submitApplicationForm(
  formData: FormData,
  phoneForm: string,
  attachment: Attachment
) {
  const validatedFields = formApp.safeParse({
    name: formData.get("name"),
    surename: formData.get("name"),
    email: formData.get("email"),
    phone: phoneForm,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, surnname } = validatedFields.data;

  const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #444;
            font-size: 24px;
          }
          .section {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          .section h2 {
            margin-top: 0;
            font-size: 18px;
            color: #555;
          }
          .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Application Form Submission</h1>
          <p>You have received a new application from the contact form on your website.</p>
          
          <div class="section">
            <h2>Contact Details:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Surname:</strong> ${surnname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          
          <div class="footer">
            <p>This email was sent from the contact form on your website.</p>
          </div>
        </div>
      </body>
      </html>
    `;

  try {
    await sendMail({
      subject: `New Application form submission from ${name}`,
      html: emailHtml,
      file: attachment,
    });
    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
