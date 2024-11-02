// views/HomePage.tsx
"use client";

import { useState, FormEvent } from "react";
import axios from "axios";
import AudioList from "@/components/AudioList";

export default function HomePage() {
  const [name, setName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setMessage(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      await axios.post("/api/controller/audio/upload", {
        name,
        content: arrayBuffer,
      }, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage("File uploaded successfully!");
      setName("");
      setFile(null);
    } catch (error) {
      console.error("Upload failed:", error);
      setMessage("Failed to upload file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800">Audio Streaming App</h1>

      <form onSubmit={handleUpload} className="flex flex-col items-center space-y-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Audio Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-black p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          className="w-full text-black p-2 border rounded-md cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:bg-blue-500 file:text-white"
        />
        
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
        
        {message && (
          <p className={`text-sm ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </form>
      <AudioList />
    </div>
  );
}
