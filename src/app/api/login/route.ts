import { dbConnection } from "@/dbConnection/dbConnection";
import { User } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; 

const JWT_SECRET = process.env.JWT_SECRET!;
dbConnection();
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate JWT
    const token = jwt.sign({ id: existingUser._id, email }, JWT_SECRET, {
      expiresIn: "1d", 
    });

   
    const response = NextResponse.json({
      success: true,
      message: "Welcome back",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 3 * 24 * 60 * 60, 
    });
console.log(response);

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "An error occurred",
    });
  }
}
