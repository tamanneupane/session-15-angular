import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  readonly apiUrl = 'http://localhost:8080/doctor-service/api/';

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<any> {
    return this.http.get(this.apiUrl + 'v1/doctor');
  }
}
