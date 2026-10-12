import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In production with Resend API key:
    // const resendKey = process.env.RESEND_API_KEY;
    // If set, you can call resend.emails.send({...})

    console.log("Contact form submission received:", {
      name,
      email,
      projectType,
      budget,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you Dinesh received your inquiry! He will respond within 2 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to submit message. Please email directly." },
      { status: 500 }
    );
  }
}
