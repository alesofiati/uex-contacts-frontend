import { Login } from './../../../interfaces/login';
import { ResponseError } from './../../../interfaces/response-error';
import { ResponseSuccess } from './../../../interfaces/response-success';
import { ForgotPassword } from './../../../interfaces/forgot-password';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from 'src/app/interfaces/register';
import { ResetPassword } from 'src/app/interfaces/reset-password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost/api'

  defaultHeaders: string = ''

  constructor(private http: HttpClient) { }

  login(data: Login): Observable<ResponseSuccess>
  {
    return this.http.post<ResponseSuccess>(`${this.apiUrl}/login`, data);
  }

  register(data: Register): Observable<ResponseSuccess|ResponseError>
  {
    return this.http.post<ResponseSuccess|ResponseError>(`${this.apiUrl}/register`, data);
  }

  forgotePassword(data: ForgotPassword): Observable<ResponseSuccess|ResponseError>
  {
    return this.http.post<ResponseSuccess|ResponseError>(`${this.apiUrl}/forgot-password`, data);
  }

  resetPassword(data: ResetPassword): Observable<ResponseSuccess>
  {
    return this.http.post<ResponseSuccess>(`${this.apiUrl}/reset-password`, data);
  }

}
