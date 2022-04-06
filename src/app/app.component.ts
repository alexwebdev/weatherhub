import { Component, OnInit } from '@angular/core';
import { WeatherStore } from './store/weather.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  constructor(
    private weatherStore: WeatherStore,
  ) {}

  ngOnInit() {
    this.weatherStore.getWeather();
  }

}
