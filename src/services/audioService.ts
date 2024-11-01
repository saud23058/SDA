
import { dbConnection } from "@/dbConnection/db";
import AudioFile from "../models/AudioFile";
import { Audio } from "@/models/AudioSchema";

let audioFiles: AudioFile[] = [];
dbConnection()
export const uploadAudioFile = async (name: string, fileContent: ArrayBuffer): Promise<AudioFile> => {
  const url = `${name}`; 
  const audioFile = new AudioFile(name, url);
  audioFiles.push(audioFile);
  console.log(audioFile);

  const newAudio = await Audio.create({
    title: name,
    url:"url"
  })
  newAudio.save()
  return audioFile;
};

export const getAudioFiles = async (): Promise<AudioFile[]> => {
  console.log("Current audio files:", audioFiles);
  const audios = Audio.find()
  return audioFiles;
};
