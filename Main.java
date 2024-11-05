// Main.java
import controllers.AudioUploaderController;
import views.AudioUploaderView;
import views.UploadView;

public class Main {
    public static void main(String[] args) {
        AudioUploaderView loginView = new AudioUploaderView();
        UploadView uploadView = new UploadView();

        new AudioUploaderController(loginView, uploadView);

        loginView.setVisible(true);
    }
}
