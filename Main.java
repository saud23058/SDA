import controllers.admin.AdminController;
import controllers.upload.UploadController;
import views.AudioUploaderView;
import views.UploadView;

public class Main {
    public static void main(String[] args) {
        AudioUploaderView loginView = new AudioUploaderView();
        UploadView uploadView = new UploadView();

      
        AdminController adminController = new AdminController(loginView, uploadView);
        UploadController uploadController = new UploadController(uploadView);

        loginView.setVisible(true); 
    }
}
