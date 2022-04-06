export interface WeatherState {
  cities: CityState[];
}

export interface CityState {
  name: string;
  lat: number;
  long: number;
}
