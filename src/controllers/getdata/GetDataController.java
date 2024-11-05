package controllers.getdata;

import models.AudioFile;
import views.UploadView;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

public class GetDataController {
    private UploadView uploadView;
    private List<AudioFile> audioFiles;

    public GetDataController(UploadView uploadView, List<AudioFile> audioFiles) {
        this.uploadView = uploadView;
        this.audioFiles = audioFiles;
    }

    class GetDataListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            showAudioFiles();
        }

        private void showAudioFiles() {
            StringBuilder fileList = new StringBuilder("Uploaded Audio Files:\n");
            for (AudioFile file : audioFiles) {
                fileList.append(file.getName()).append(" - ").append(file.getPath()).append("\n");
            }
            JOptionPane.showMessageDialog(uploadView, fileList.toString(), "Uploaded Audio Files", JOptionPane.INFORMATION_MESSAGE);
        }
    }
}
