import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/config/db";
import { v4 as uuidv4 } from "uuid";
import { createPayment } from "@/app/service/bkash";

connectDB();

const bkashConfig = {
  app_key: process.env.BKASH_APP_KEY,
  app_secret: process.env.BKASH_APP_SECRET,
  username: process.env.BKASH_USERNAME,
  password: process.env.BKASH_PASSWORD,
  base_url: process.env.BKASH_BASE_URL,
}

export async function POST(request) {
  try {
    const { email, name, phone } = await request.json();
    console.log(email, name, phone);
    return NextResponse.json(
      { message: "Payment initiated successfully", data: { email, name, phone } },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
