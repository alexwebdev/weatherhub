import { Component } from '@angular/core';
import { WeatherStore } from './store/weather.store';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherhub';

  constructor(
    private store: WeatherStore,
    private api: ApiService
  ) {
    this.store.cities$.subscribe(c => {
      this.api.getWeather(c[0].lat, c[0].long).subscribe(weather => {
        console.log('weather data', weather);
      });
    });
  }

}
