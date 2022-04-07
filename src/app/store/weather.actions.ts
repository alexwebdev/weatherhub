import { createAction, props } from '@ngrx/store';
import { CityState } from './weather.state';

export namespace WeatherActions {
  export const getWeather = createAction('Get weather');

  export const getCityWeather = createAction(
    'Get city weather',
    props<{ city: CityState }>()
  );

  export const getCityWeatherSuccess = createAction(
    'Get city weather - success',
    props<{
      cityName: string,
      data: any // use any since there is no interface defined for weather data
    }>()
  );

  export const getCityWeatherError = createAction('Get city weather - error');

  export const getForecast = createAction(
    'Get forecast',
    props<{ city: CityState }>()
  );

  export const getForecastSuccess = createAction(
    'Get forecast - success',
    props<{
      cityName: string,
      data: any[]
    }>()
  );

  export const getForecastError = createAction(
    'Get forecast - error'
  );
}
