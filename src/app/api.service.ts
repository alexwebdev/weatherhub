import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(`${environment.weatherApi.url}/weather`, {
      params: {
        lat,
        lon,
        units: 'metric',
        appId: environment.weatherApi.appId
      }
    });
  }

  getForecast(lat: number, lon: number): Observable<any> {
    return this.http.get(`${environment.weatherApi.url}/forecast`, {
      params: {
        lat,
        lon,
        units: 'metric',
        appId: environment.weatherApi.appId,
        cnt: 5
      }
    });
  }

}
