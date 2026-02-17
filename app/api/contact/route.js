import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const verifyRecaptcha = async (recaptchaValue) => {
  const url = "https://www.google.com/recaptcha/api/siteverify";
  const response = await fetch(url, {
    method: "POST",
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaValue,
    }),
  });

  const data = await response.json();
  return data.success;
};

export async function POST(request) {
  const { name, email, message, recaptchaValue } = await request.json();
  const to = ["fineschliffdesign@gmail.com", "crumbdahousecat1984@yahoo.de"];
  const subject = "Neue Kontaktanfrage von " + name;
  const password = process.env.EMAIL_PASS;
  const isCaptchaValid = await verifyRecaptcha(recaptchaValue);

  if (!isCaptchaValid) {
    return NextResponse.json({
      success: false,
      message: "reCAPTCHA ist fehlgeschlagen!",
    });
  }

  const transporter = nodemailer.createTransport({
    // Alternative Version für Nicht-Gmail-Adressen:
    // host: "mail.your-server.de",
    // port: 587,
    // secure: false,

    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mail1 = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: to,
    replyTo: email,
    subject: subject,
    text: message,
  };
  // Alternative Version für Nicht-Gmail-Adressen:
  // const mail1 = {
  //   from: email,
  //   to: to,
  //   subject: subject,
  //   text: message,
  // };

  const mail2 = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Danke für Ihre Anfrage",
    text: "Wir haben deine Anfrage erhalten.",
  };
  // Alternative Version für Nicht-Gmail-Adressen:
  // const mail2 = {
  //   from: to,
  //   to: email,
  //   subject: "Danke für Ihre Anfrage",
  //   text: "Wir haben deine Anfrage erhalten.",
  // };

  try {
    await transporter.sendMail(mail1);
    await transporter.sendMail(mail2);

    return NextResponse.json({
      success: true,
      message: "Deine Nachricht wurde erfolgreich versendet!",
    });
  } catch (error) {
    console.error("Fehler beim Mailversand", error);

    return NextResponse.json(
      {
        success: false,
        message: "Beim versenden der Nachricht ist ein Fehler aufgetreten.",
      },
      { status: 500 }
    );
  }
}
