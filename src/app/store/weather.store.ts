import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherSelectors } from './weather.selectors';
import { AppState } from './app.state';
import { WeatherActions } from './weather.actions';

@Injectable({ providedIn: 'root' })
export class WeatherStore {

  cities$ = this.store.select(WeatherSelectors.cities);

  constructor(private store: Store<AppState>) {}

  getWeather(): void {
    this.store.dispatch(WeatherActions.getWeather());
  }
}
