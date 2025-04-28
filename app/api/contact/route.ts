import Contact from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/database/mongodb";
import nodemailer from "nodemailer";


export const POST = async (req: NextRequest) => {
  await dbConnect();
  const { name, phone, countryName, countryCode, email, service, message } =
    await req.json();
  try {
    await Contact.create({
      name,
      phone,
      countryName,
      countryCode,
      email,
      service,
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
                 
                 Name: ${name}
                 Email: ${email}
                 Phone: ${phone}
                 Country: ${countryName}
                 Country Code: ${countryCode}
                 Service: ${service}
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
