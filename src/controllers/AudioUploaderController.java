
package controllers;

import models.AudioFile;
import views.AudioUploaderView;
import views.UploadView;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

public class AudioUploaderController {
    private AudioUploaderView loginView;
    private UploadView uploadView;
    private List<AudioFile> audioFiles;
    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_PASSWORD = "123";

    public AudioUploaderController(AudioUploaderView loginView, UploadView uploadView) {
        this.loginView = loginView;
        this.uploadView = uploadView;
        this.audioFiles = new ArrayList<>();

        this.loginView.setLoginListener(new LoginListener());
        this.uploadView.setUploadListener(new UploadListener());
        this.uploadView.setGetDataListener(new GetDataListener());
        this.uploadView.setPlayListener(new PlayListener());  
    }

    class LoginListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            String username = loginView.getUsername();
            String password = loginView.getPassword();

            if (ADMIN_USERNAME.equals(username) && ADMIN_PASSWORD.equals(password)) {
                loginView.setVisible(false);
                uploadView.setVisible(true);
            } else {
                loginView.displayErrorMessage("Incorrect username or password.");
            }
        }
    }

    class UploadListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            String filePath = uploadView.getFilePath();
            if (filePath != null) {
                if (filePath.endsWith(".mp3") || filePath.endsWith(".wav") || filePath.endsWith(".aac")) {
                    String fileName = uploadView.getFileName();
                    audioFiles.add(new AudioFile(fileName, filePath));
                    JOptionPane.showMessageDialog(uploadView, "Audio uploaded successfully", "Success", JOptionPane.INFORMATION_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(uploadView, "Invalid file type. Please upload an audio file.", "Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        }
    }

    class GetDataListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            uploadView.showAudioFiles(audioFiles);
        }
    }

    class PlayListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            uploadView.playSelectedAudio();
        }
    }
}
