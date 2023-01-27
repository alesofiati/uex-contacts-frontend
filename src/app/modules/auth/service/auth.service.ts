import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost/api'

  defaultHeaders: string = ''

  constructor(private http: HttpClient) { }


  register(data: any): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

}
