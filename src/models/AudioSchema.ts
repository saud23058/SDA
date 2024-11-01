import mongoose, { Schema } from "mongoose";

interface Audio {
  title: string;
  url: string;
  uploadDate: Date;

}


const AudioSchema: Schema<Audio> = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
});


export const Audio =
  mongoose.models.Audio || mongoose.model<Audio>("Audio", AudioSchema); 