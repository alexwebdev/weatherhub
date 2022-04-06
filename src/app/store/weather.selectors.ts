import { WeatherState } from './weather.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export namespace WeatherSelectors {
  export const weatherState = (state: AppState) => state.weather;

  export const cities = createSelector(
    weatherState,
    (state: WeatherState) => state.cities
  );
}
