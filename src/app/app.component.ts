import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppUploadFileComponent } from './atoms/app-upload-file/app-upload-file.component';
import { DownloadButtonComponent } from './atoms/download-button/download-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppUploadFileComponent, DownloadButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'file-uploader-view';
}
