import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.string(),
  message: z.string(),
  consent: z.boolean()
});

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = schema.safeParse(json);

  if (!parsed.success || !parsed.data.consent) {
    return NextResponse.json({ error: "Validation error" }, { status: 400 });
  }

  const payload = parsed.data;
  console.log("Lead request:", payload);

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? user,
      to: process.env.LEADS_TO_EMAIL ?? user,
      subject: `Новая заявка: ${payload.company}`,
      text: Object.entries(payload).map(([k, v]) => `${k}: ${v}`).join("\n")
    });
  }

  return NextResponse.json({ ok: true });
}
