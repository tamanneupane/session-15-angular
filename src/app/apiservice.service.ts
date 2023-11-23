import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createDoctors(doctor: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(this.apiUrl + 'v1/doctor', doctor, httpOptions);
  }

  editDoctors(doctor: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(
      this.apiUrl + 'v1/doctor/' + doctor.id,
      doctor,
      httpOptions
    );
  }

  deleteDoctors(doctorId: any): Observable<any> {
    return this.http.delete(this.apiUrl + 'v1/doctor/' + doctorId);
  }
}
