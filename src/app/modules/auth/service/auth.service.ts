import { ResponseError } from './../../../interfaces/response-error';
import { ResponseSuccess } from './../../../interfaces/response-success';
import { ForgotPassword } from './../../../interfaces/forgot-password';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Register } from 'src/app/interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost/api'

  defaultHeaders: string = ''

  constructor(private http: HttpClient) { }


  register(data: Register): Observable<ResponseSuccess|ResponseError>
  {
    return this.http.post<ResponseSuccess|ResponseError>(`${this.apiUrl}/register`, data);
  }

  forgotePassword(data: ForgotPassword): Observable<ResponseSuccess|ResponseError>
  {
    return this.http.post<ResponseSuccess|ResponseError>(`${this.apiUrl}/forgot-password`, data);
  }

}
