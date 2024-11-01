import mongoose from "mongoose";

export async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_URI!);
    const connection = mongoose.connection;
    connection.on("success", () => {
      console.log("Database connected Successfully");
    });
    connection.on("error", () => {
      console.log("Database connection error");
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("DB Connection Error ");
    process.exit(1)
    
  }
}
