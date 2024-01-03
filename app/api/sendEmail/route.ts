import EventsFormEmail from "@/app/events/EventsFormEmail";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const {
    formData,
    formattedDate
  } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  let data;
  try {
    data = await resend.emails.send({
      from: "red-taco-shop@resend.dev",
      to: "redtacoshop@outlook.com",
      subject: "Event Request",
      react: React.createElement(EventsFormEmail, {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        eventType: formData.eventType,
        crowdSize: formData.crowdSize,
        eventDate: formattedDate,
      }),
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Sonething went wrong. Email has not been delivered." },
      { status: 400 }
    );
  }

  return NextResponse.json({ status: 200 });
}
