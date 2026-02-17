import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FileUploadModule, FileUploadHandlerEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [FileUploadModule],
  templateUrl: './app-upload-file.component.html',
  styleUrl: './app-upload-file.component.scss',
})
export class AppUploadFileComponent {
  @Output()
  fileSelected:EventEmitter<File> = new EventEmitter<File>();
  @Input()
  buttonLabel: string = '';
  @Input()
  uploadLabel: string = '';


  onFileSelect(event: FileUploadHandlerEvent): void {
    const file = event.files[0];
    this.fileSelected.emit(file);
  }
}
