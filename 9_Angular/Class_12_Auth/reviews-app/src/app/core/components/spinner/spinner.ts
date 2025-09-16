import { Component, inject } from '@angular/core';
import { SpinnerService } from '../../services/spinner-service';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
})
export class Spinner {
  showSpinner = inject(SpinnerService).showSpinner;
}
