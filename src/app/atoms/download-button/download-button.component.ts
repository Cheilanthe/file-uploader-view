import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-download-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss',
})
export class DownloadButtonComponent {
  loading: boolean = false;

  public load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
