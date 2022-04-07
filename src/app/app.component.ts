import { Component, OnInit } from '@angular/core';
import { WeatherStore } from './store/weather.store';
import { CityState } from './store/weather.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public weatherStore: WeatherStore,
  ) {}

  ngOnInit() {
    this.weatherStore.getWeather();
  }

  onPanelOpen(city: CityState): void {
    this.weatherStore.getForecast(city);
  }

}
