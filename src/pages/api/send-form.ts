// pages/api/send-form.ts
import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не разрешён" });
  }

  const { name, phone } = req.body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "Имя обязательно" });
  }

  if (!phone || typeof phone !== "string" || phone.length < 11) {
    return res.status(400).json({ error: "Некорректный номер телефона" });
  }

  try {
    await resend.emails.send({
      from: "ResearchIT <onboarding@resend.dev>",
      to: [
        "hello@research-it.ru",
        "ak@aeros.su",
        "xenia.vik.eremenko@yandex.ru",
        "sauerwein9991@gmail.com",
      ],
      subject: "Новая заявка на бесплатный аудит",
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><em>Отправлено через сайт research-it.ru</em></p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Произошла неизвестная ошибка";

    console.error("Resend error:", error);
    return res.status(500).json({ error: message });
  }
}
