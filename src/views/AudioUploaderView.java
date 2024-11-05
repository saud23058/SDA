// views/AudioUploaderView.java
package views;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;

public class AudioUploaderView extends JFrame {
    private JTextField usernameField;
    private JPasswordField passwordField;
    private JButton loginButton;
    private JLabel messageLabel;

    public AudioUploaderView() {
        setTitle("Admin Login - Audio Uploader");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        // Login panel setup
        JPanel loginPanel = new JPanel(new GridLayout(3, 2, 10, 10));
        loginPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        usernameField = new JTextField();
        passwordField = new JPasswordField();
        loginButton = new JButton("Login");

        loginPanel.add(new JLabel("Username:"));
        loginPanel.add(usernameField);
        loginPanel.add(new JLabel("Password:"));
        loginPanel.add(passwordField);

        // Adding components
        add(loginPanel, BorderLayout.CENTER);
        add(loginButton, BorderLayout.SOUTH);

        // Message label
        messageLabel = new JLabel("", SwingConstants.CENTER);
        add(messageLabel, BorderLayout.NORTH);
    }

    public String getUsername() {
        return usernameField.getText();
    }

    public String getPassword() {
        return new String(passwordField.getPassword());
    }

    public void displayErrorMessage(String message) {
        JOptionPane.showMessageDialog(this, message, "Login Error", JOptionPane.ERROR_MESSAGE);
    }

    public void setLoginListener(ActionListener listener) {
        loginButton.addActionListener(listener);
    }
}
