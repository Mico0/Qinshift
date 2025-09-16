import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private toastrService = inject(ToastrService);

  showToast(msg: string, status: boolean) {
    if (status) this.toastrService.success(msg);
    else this.toastrService.error(msg);
  }
}
