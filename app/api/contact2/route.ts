import Contact from "@/models/Contact2";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/database/mongodb";
import nodemailer from "nodemailer";



export const POST = async (req: NextRequest) => {
  await dbConnect();
  const { firstName, lastName, email, phone, requirement, message } =
    await req.json();
  try {
    await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      requirement,
      message,
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
      subject: "New Enquiry Received from Website",
      text: `You have a new enquiry from the website:
                 
                 Name: ${firstName} ${lastName}
                 Email: ${email}
                 Phone: ${phone}
                 Requirement: ${requirement}
                 Message: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Contact form submitted" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
