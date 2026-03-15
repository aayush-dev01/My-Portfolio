import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = "aayushpatil.dev@gmail.com"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      )
    }

    const emailSubject = subject?.trim() || "New portfolio contact"

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 },
      )
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      reply_to: email,
      subject: emailSubject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error", error)
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 },
    )
  }
}

