import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TOKEN;
const MAILTRAP_ACCOUNTID = process.env.MAILTRAP_ACCOUNTID as string;
export const sendMail = ({
  html,
  subject,
}: {
  subject: string;
  html: string;
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

    client.send({
      from: sender,
      to: recipients,
      subject,
      html,
    });
  } catch (error: any) {
    console.error("Failed to send email:", error.message);
    throw error;
  }
};
