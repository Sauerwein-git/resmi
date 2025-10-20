import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, phone } = req.body;
  if (!name || !phone || phone.length < 11) {
    return res.status(400).json({ error: "Некорректные данные" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.mail.ru",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Research IT" <${process.env.SMTP_USER}>`,
      to: "hello@research-it.ru,ak@aeros.su,xenia.vik.eremenko@yandex.ru,sauerwein9991@gmail.com",
      subject: "Новая заявка с research-it.ru",
      text: `Имя: ${name}\nТелефон: ${phone}`,
    });
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Ошибка отправки письма:", error);
    res.status(500).json({ error: "Не удалось отправить заявку" });
  }
}
