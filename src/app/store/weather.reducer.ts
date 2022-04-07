import { WeatherState } from './weather.state';
import { Action, createReducer, on } from '@ngrx/store';
import { WeatherActions } from './weather.actions';

export const initialState: WeatherState = {
  cities: [
    {
      name: 'Kraków',
      lat: 50.064651,
      lon: 19.944981
    },
    {
      name: 'Maspalomas',
      lat: 27.766260,
      lon: -15.579750
    },
    {
      name: 'Rovaniemi',
      lat: 66.503944,
      lon: 25.729391
    },
    {
      name: 'Bristol',
      lat: 36.595104,
      lon: -82.188744
    },
    {
      name: 'Suwałki',
      lat: 54.099918,
      lon: 22.926979
    }
  ],
  temperature: {},
  windSpeed: {},
  forecast: {}
};

const reducer = createReducer(
  initialState,

  on(WeatherActions.getCityWeatherSuccess, (state, { cityName, data }) => ({
    ...state,
    temperature: {
      ...state.temperature,
      [cityName]: data.main?.temp
    },
    windSpeed: {
      ...state.windSpeed,
      [cityName]: data.wind?.speed
    }
  })),

  on(WeatherActions.getForecastSuccess, (state, { cityName, data }) => ({
    ...state,
    forecast: {
      ...state.forecast,
      [cityName]: data
    }
  })),
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
