import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherActions } from './weather.actions';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { ApiService } from '../api.service';
import { WeatherStore } from './weather.store';

@Injectable()
export class WeatherEffects {

  getWeather$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActions.getWeather),
    withLatestFrom(this.weatherStore.cities$),
    mergeMap(([, cities]) => {
      return cities.map(city => WeatherActions.getCityWeather({ city }));
    })
  ));

  getCityWeather$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActions.getCityWeather),
    mergeMap(({ city }) => this.api.getWeather(city.lat, city.lon).pipe(
      // Pass all weather data in the action. Could be limited only to temperature and wind strength
      map(data => WeatherActions.getCityWeatherSuccess({ cityName: city.name, data })),
      catchError(() => of(WeatherActions.getCityWeatherError))
    ))
  ))

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private weatherStore: WeatherStore
  ) {}
}
