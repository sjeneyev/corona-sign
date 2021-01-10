import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getEmployees(): Observable<any> {
        return this.http.get(`${env.backendEndpoint}/employees`);
    }

    addSignature(data): Observable<any> {
        // console.log(data);
        return this.http.post(`${env.backendEndpoint}/signature`, data, {});
    }
}
