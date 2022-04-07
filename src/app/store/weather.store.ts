import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherSelectors } from './weather.selectors';
import { AppState } from './app.state';
import { WeatherActions } from './weather.actions';
import { CityState } from './weather.state';

@Injectable({ providedIn: 'root' })
export class WeatherStore {

  state$ = this.store.select(WeatherSelectors.state);
  cities$ = this.store.select(WeatherSelectors.cities);

  constructor(private store: Store<AppState>) {}

  getWeather(): void {
    this.store.dispatch(WeatherActions.getWeather());
  }

  getForecast(city: CityState): void {
    this.store.dispatch(WeatherActions.getForecast({ city }));
  }
}
