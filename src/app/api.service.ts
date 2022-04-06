import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  //https://api.openweathermap.org/data/2.5/weather?lat=51&lon=17&appid=a72a3f7efc9702ddfb2be2efb6611217&units=metric

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

}
