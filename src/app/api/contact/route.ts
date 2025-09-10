import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json()

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // you can replace with your own domain once verified
      to: process.env.EMAIL_TO!,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Error sending email" }, { status: 500 })
  }
}
