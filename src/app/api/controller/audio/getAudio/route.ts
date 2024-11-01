// app/api/audio/route.ts
import { NextResponse } from "next/server";
import { getAudioFiles } from "@/services/audioService"; 

export async function GET() {
  const files = await getAudioFiles();
  console.log("From audio route",files);
  
  return NextResponse.json(files);
}
