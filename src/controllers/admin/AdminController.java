package controllers.admin;

import views.AudioUploaderView;
import views.UploadView; 

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AdminController {
    private AudioUploaderView loginView;
    private UploadView uploadView;  // Add an instance of UploadView
    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_PASSWORD = "123";

    public AdminController(AudioUploaderView loginView, UploadView uploadView) {
        this.loginView = loginView;
        this.uploadView = uploadView;  // Initialize UploadView
        this.loginView.setLoginListener(new LoginListener());
    }

    class LoginListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            String username = loginView.getUsername();
            String password = loginView.getPassword();

            if (ADMIN_USERNAME.equals(username) && ADMIN_PASSWORD.equals(password)) {
                loginView.setVisible(false);  // Hide the login view
                uploadView.setVisible(true);   // Show the upload view
            } else {
                loginView.displayErrorMessage("Incorrect username or password.");
            }
        }
    }
}
