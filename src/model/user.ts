import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  password: string;
  token:string
}

const userSchema: Schema<User> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address"]
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: 6,
    },
    token: {
      type: String,
      default:null
    }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
