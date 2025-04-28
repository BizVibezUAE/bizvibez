import Career from "@/models/Careers";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/database/mongodb";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  await dbConnect();
  const {
    firstName,
    lastName,
    email,
    phone,
    applyingFor,
    location,
    linkedInProfile,
  } = await req.json();

  try {
    await Career.create({
      firstName,
      lastName,
      email,
      phone,
      applyingFor,
      location,
      linkedInProfile,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });
    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: "forms@bizvibez.com",
      subject: "New Career Application Received",
      text: `You have a new career application:

                   Name: ${firstName} ${lastName}
                   Email: ${email}
                   Phone: ${phone}
                   Applying For: ${applyingFor}
                   Location: ${location}
                   LinkedIn Profile: ${linkedInProfile}`,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Career form submitted" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
