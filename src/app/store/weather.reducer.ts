import { WeatherState } from './weather.state';
import { Action, createReducer } from '@ngrx/store';

export const initialState: WeatherState = {
  cities: [
    {
      name: 'Kraków',
      lat: 50.064651,
      long: 19.944981
    },
    {
      name: 'Maspalomas',
      lat: 27.766260,
      long: -15.579750
    },
    {
      name: 'Rovaniemi',
      lat: 66.503944,
      long: 25.729391
    },
    {
      name: 'Bristol',
      lat: 36.595104,
      long: -82.188744
    },
    {
      name: 'Suwałki',
      lat: 54.099918,
      long: 22.926979
    }
  ]
};

const reducer = createReducer(
  initialState
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
