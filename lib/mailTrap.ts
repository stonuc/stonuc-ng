import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TOKEN;
const MAILTRAP_ACCOUNTID = process.env.MAILTRAP_ACCOUNTID as string;

type Attachment = {
  filename: string;
  content: string;
}[];

export const sendMail = async ({
  html,
  subject,
  file,
}: {
  subject: string;
  html: string;
  file?: Attachment;
}) => {
  try {
    const sender = {
      email: "hello@demomailtrap.com",
      name: "Stonuc Technologies",
    };
    const recipients = [
      {
        email: "atoovis@gmail.com",
      },
    ];

    const client = new MailtrapClient({
      token: TOKEN as string,
      accountId: +MAILTRAP_ACCOUNTID,
    });

    await client.send({
      from: sender,
      to: recipients,
      subject,
      html,
      attachments: file ? [
        {
            content:  file[0].content,
            filename: file[0].filename,

        }
      ] : [],
    });

    console.log("Email sent successfully!");
  } catch (error: any) {
    console.error("Failed to send email:", error.message);
    throw error;
  }
};
