// components/AudioList.tsx
import { useState } from "react";
import axios from "axios";
import AudioFile from "../models/AudioFile";
import AudioPlayer from "./AudioPlayer";

export default function AudioList() {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get('/api/controller/audio/getAudio');
      console.log(res);
      
      // Set the audio files from the response data
      setAudioFiles(res.data); // Assuming res.data is an array of audio files
    } catch (error) {
      console.error("Error fetching audio files:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg mt-6">
      <button 
        className="bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-800 transition" 
        onClick={getData}
      >
        Get Audio Data
      </button>

      {audioFiles.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Audio Files</h2>
          <ul className="space-y-4">
            {audioFiles.map((file, index) => (
              <li
                key={index}
                className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4 transition transform hover:scale-105 hover:bg-gray-50"
              >
                <div className="flex-grow">
                  <p className="text-lg font-medium text-gray-700">{file.name}</p>
                  <p className="text-sm text-gray-500">Uploaded on {new Date(file.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="w-64"> {/* Set a specific width for the audio player */}
                  <AudioPlayer name={file.name} url={file.url} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {audioFiles.length === 0 && (
        <p className="text-gray-500 text-center">No audio files available</p>
      )}
    </div>
  );
}
