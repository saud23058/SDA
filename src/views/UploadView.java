// views/UploadView.java
package views;

import models.AudioFile;

import javax.swing.*;
import javax.swing.filechooser.FileNameExtensionFilter;
import java.awt.*;
import java.awt.event.ActionListener;
import java.util.List;

public class UploadView extends JFrame {
    private JButton uploadButton;
    private JButton getDataButton;
    private JButton playButton;  // Add play button
    private JList<AudioFile> audioList;
    private DefaultListModel<AudioFile> listModel;
    private JFileChooser fileChooser;

    public UploadView() {
        setTitle("Audio Uploader - Admin");
        setSize(500, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        // Main panel
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new FlowLayout());

        uploadButton = new JButton("Upload Audio");
        getDataButton = new JButton("View Uploaded Audios");
        playButton = new JButton("Play Selected Audio");  // Initialize play button

        mainPanel.add(uploadButton);
        mainPanel.add(getDataButton);
        mainPanel.add(playButton);  // Add play button to the main panel
        add(mainPanel, BorderLayout.NORTH);

        // List model and list for audio files
        listModel = new DefaultListModel<>();
        audioList = new JList<>(listModel);
        audioList.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        audioList.setVisibleRowCount(10);
        JScrollPane listScrollPane = new JScrollPane(audioList);

        add(listScrollPane, BorderLayout.CENTER);

        // File chooser for audio files
        fileChooser = new JFileChooser();
        fileChooser.setFileFilter(new FileNameExtensionFilter("Audio Files", "mp3", "wav", "aac"));
    }

    public String getFilePath() {
        int result = fileChooser.showOpenDialog(this);
        if (result == JFileChooser.APPROVE_OPTION) {
            return fileChooser.getSelectedFile().getAbsolutePath();
        }
        return null;
    }

    public String getFileName() {
        return fileChooser.getSelectedFile().getName();
    }

    public void showAudioFiles(List<AudioFile> audioFiles) {
        listModel.clear();
        for (AudioFile file : audioFiles) {
            listModel.addElement(file);
        }
    }

    public void playSelectedAudio() {
        AudioFile selectedAudio = audioList.getSelectedValue();
        if (selectedAudio != null) {
            selectedAudio.play();
        } else {
            JOptionPane.showMessageDialog(this, "Please select an audio file to play.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    public void setUploadListener(ActionListener listener) {
        uploadButton.addActionListener(listener);
    }

    public void setGetDataListener(ActionListener listener) {
        getDataButton.addActionListener(listener);
    }

    // Add this method to set the listener for the play button
    public void setPlayListener(ActionListener listener) {
        playButton.addActionListener(listener);
    }
}
