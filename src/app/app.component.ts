import { Component, OnInit } from '@angular/core';
import { WeatherStore } from './store/weather.store';

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

}
