import { Component } from '@angular/core';
import { WeatherStore } from './store/weather.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherhub';

  constructor(private store: WeatherStore) {
    this.store.cities$.subscribe(c => console.log('cities', c));
  }

}
