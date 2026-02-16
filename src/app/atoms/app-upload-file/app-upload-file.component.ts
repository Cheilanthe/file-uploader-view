import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [FileUploadModule],
  templateUrl: './app-upload-file.component.html',
  styleUrl: './app-upload-file.component.scss',
})
export class AppUploadFileComponent {
  public onUpload(event: any) {
    console.log('File uploaded:', event);
  }
}
