import { dbConnection } from "@/dbConnection/dbConnection";
import { User } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; 

const JWT_SECRET = process.env.JWT_SECRET!; // Ensure you have a JWT secret

export async function POST(request: NextRequest) {
  try {
    await dbConnection();

    const { username, email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "Email already used",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Generate JWT
    const token = jwt.sign({ id: newUser._id, email }, JWT_SECRET, {
      expiresIn: "1d", // 1 day token expiration
    });

    // Remove password from response
    newUser.password = undefined;

    const response = NextResponse.json({
      success: true,
      newUser,
    });

    
    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict", 
      maxAge: 3 * 24 * 60 * 60, 
    });

    return response;
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred",
    });
  }
}
