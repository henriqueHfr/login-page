import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    const body = { email, password };
    return this.httpClient.post<LoginResponse>('/api/login', body).pipe(
      tap((response) => {
        sessionStorage.setItem('auth-token', response.token);
        sessionStorage.setItem('user-name', response.name);
      }
    ));
  }
  signup(name: string, email: string, password: string) {
    const body = { name, email, password };
    return this.httpClient.post<LoginResponse>('/api/signup', body)
  }
}
