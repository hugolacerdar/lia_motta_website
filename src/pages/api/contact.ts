import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.MAIL_ADDRESS,
    to: "contato@liamotta.com",
    subject: `Mensagem de ${req.body.name}`,
    replyTo: req.body.email,
    text: req.body.message + " | Enviada por: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Enviada por:
      ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
};

export default handler;
