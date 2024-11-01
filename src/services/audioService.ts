
import AudioFile from "../models/AudioFile";

let audioFiles: AudioFile[] = [];

export const uploadAudioFile = async (name: string, fileContent: ArrayBuffer): Promise<AudioFile> => {
  const url = `${name}`; 
  const audioFile = new AudioFile(name, url);
  audioFiles.push(audioFile);
  console.log(audioFile);
  return audioFile;
};

export const getAudioFiles = async (): Promise<AudioFile[]> => {
  console.log("Current audio files:", audioFiles); 
  return audioFiles;
};
