import { NextResponse } from "next/server";
import { uploadAudioFile } from "@/services/audioService";

export async function POST(request: Request) {
  const { name, content } = await request.json();
  const audioFile = await uploadAudioFile(name, content);
  return NextResponse.json(audioFile, { status: 201 });
}
