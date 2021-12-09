import type { NextApiHandler, NextApiRequest } from "next";
import nodemailer from "nodemailer";
import formidable, { Options } from "formidable";

interface Fields {
  name: string;
  message: string;
  email: string;
}

interface FormidablePromise {
  fields: Fields;
}

function formidablePromise(
  req: NextApiRequest,
  opts: Options
): Promise<FormidablePromise> {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm(opts);

    form.parse(req, (error: Error, fields: any) => {
      if (error) {
        return reject(error);
      }
      resolve({ fields });
    });
  });
}

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(404).send({ error: "Begone." });
  }

  res.setHeader("Content-Type", "application/json");

  try {
    const { fields } = await formidablePromise(req, {});
    const { name, email, message } = fields;

    if (!name || !name.trim()) {
      throw new Error("Please provide a valid name.");
    }

    if (!email || !email.trim()) {
      throw new Error("Please provide a valid email address.");
    }

    if (!message || !message.trim()) {
      throw new Error("Please provide a valid email message.");
    }

    await transporter.sendMail({
      to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      replyTo: email,
      subject: `Mensagem de ${name}`,
      text: message,
      html: `<p>${message.replace(/(?:\r\n|\r|\n)/g, "<br>")}</p>`,
    });

    res.status(200).json({});
  } catch (error) {
    res.status(500).json({
      error: "Error on sending email.",
    });
  }
};

export default handler;
