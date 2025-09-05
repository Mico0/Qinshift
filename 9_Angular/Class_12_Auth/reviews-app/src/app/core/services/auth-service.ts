import { inject, Injectable } from '@angular/core';
import { AuthApiService } from './auth-api-service';
import { Router } from '@angular/router';
import { RegisterReq } from '../../feature/auth/auth-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiService = inject(AuthApiService);
  private router = inject(Router);

  registerUser(req: RegisterReq) {
    this.apiService.registerUser(req).subscribe({
      next: () => {
        console.log('user registered');
        this.router.navigate(['login']);
      },
      error: (err) => console.log(err),
    });
  }
}
