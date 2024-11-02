
// import mongoose from 'mongoose';
// import AudioFile, { IAudioFile } from './AudioFile';
// import path from 'path';
// import fs from 'fs';

// class Admin {
//   id: string;
//   username: string;
//   role: 'admin';

//   constructor(id: string, username: string) {
//     this.id = id;
//     this.username = username;
//     this.role = 'admin';
//   }

//   // Upload method - assumes file data is received as a buffer
//   async uploadAudioFile(name: string, fileContent: Buffer): Promise<IAudioFile> {
//     try {
//       // Define file path and write the file to the server
//       const filePath = path.join(__dirname, '../../uploads', `${Date.now()}-${name}`);
//       fs.writeFileSync(filePath, fileContent);

     
//       const audioFile = new AudioFile({
//         name,
//         url: filePath, 
//       });
//       await audioFile.save();

//       console.log(`Audio file ${name} uploaded successfully by ${this.username}`);
//       return audioFile;
//     } catch (error) {
//       console.error(`Failed to upload audio file: ${error}`);
//       throw new Error('Failed to upload audio file');
//     }
//   }

  
//   async deleteAudioFile(fileId: string): Promise<void> {
//     try {
   
//       const audioFile = await AudioFile.findById(fileId);
//       if (!audioFile) {
//         throw new Error('Audio file not found');
//       }

     
//       fs.unlinkSync(audioFile.url);

    
//       await AudioFile.findByIdAndDelete(fileId);

//       console.log(`Audio file ${audioFile.name} deleted successfully by ${this.username}`);
//     } catch (error) {
//       console.error(`Failed to delete audio file: ${error}`);
//       throw new Error('Failed to delete audio file');
//     }
//   }
// }

// export default Admin;
