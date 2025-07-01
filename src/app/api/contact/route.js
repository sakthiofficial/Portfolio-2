import mongoose from "mongoose";
import ContactModel from "../../../../models/contact";

const mongoURI = process.env.URL_DB;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
import { ApiResponse, RESPONSE_MESSAGE, RESPONSE_STATUS } from "@/appConstants";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Connect to the database
  await connectDB();

  try {
    const { name, email, feedback } = await req.json();
    console.log(name, email, feedback);

    const newEntry = new ContactModel({ name, email, feedback });
    await newEntry.save();
    return NextResponse.json(
      new ApiResponse(RESPONSE_STATUS?.OK, RESPONSE_MESSAGE?.OK, {
        success: true,
        message: "Visit recorded",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving visit:", error);
    return NextResponse.json(
      new ApiResponse(RESPONSE_STATUS?.ERROR, RESPONSE_MESSAGE?.ERROR, {
        error: "Internal Service Errror",
      }),
      { status: 400 }
    );
  }
}
