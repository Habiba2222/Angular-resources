import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  selectedFile: any = null; // Update the type to File | null
  selectedFileURL: any = "../../../assets/images/profile.png";

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];

      // Display the selected image preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFileURL = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
