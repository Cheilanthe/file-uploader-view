import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppUploadFileComponent } from './atoms/app-upload-file/app-upload-file.component';
import { DownloadButtonComponent } from './atoms/download-button/download-button.component';
import { FileSelectEvent } from 'primeng/fileupload';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppUploadFileComponent, DownloadButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  stateLabel: string = 'Seleccionar Archivo';
  uploadLabel: string = 'Convertir Archivo';

  public handleFile(file: File): void {
    console.log(file.name);
    if (file) {
      const fileType = file.type;
      const validTypes = ['text/csv'];
      if (!validTypes.includes(fileType)) {
        alert('Tipo de archivo no válido. Solo se permiten archivos CSV.');
      }
    }

  }
}
