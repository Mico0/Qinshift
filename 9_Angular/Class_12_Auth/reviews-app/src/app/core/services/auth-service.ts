import { inject, Injectable, signal } from '@angular/core';
import { AuthApiService } from './auth-api-service';
import { Router } from '@angular/router';
import {
  RegisterReq,
  User,
  UserCredentials,
} from '../../feature/auth/auth-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiService = inject(AuthApiService);
  private router = inject(Router);

  userData = signal<User>(null);

  constructor() {
    this.getUserFromLocalStorage();
  }

  registerUser(req: RegisterReq) {
    this.apiService.registerUser(req).subscribe({
      next: () => {
        console.log('user registered');
        this.router.navigate(['login']);
      },
      error: (err) => console.log(err),
    });
  }

  loginUser(credentials: UserCredentials) {
    this.apiService.loginUser(credentials).subscribe({
      next: (res) => {
        const token = res.headers.get('access-token');
        const refreshToken = res.headers.get('refresh-token');

        this.userData.set({ ...res.body, token, refreshToken });

        this.saveUserInLocalStorage(this.userData());

        this.router.navigate(['']);
      },
      error: (err) => console.log(err),
    });
  }

  saveUserInLocalStorage(userData: User) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  getUserFromLocalStorage() {
    const userJSON = localStorage.getItem('userData');

    if (!userJSON) return;

    this.userData.set(JSON.parse(userJSON));
  }

  logoutFromServer() {
    this.apiService.logoutUser(this.userData().refreshToken).subscribe();
  }

  logoutFromClient() {
    this.userData.set(null);
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }
}
