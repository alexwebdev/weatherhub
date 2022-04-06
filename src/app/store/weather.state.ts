export interface WeatherState {
  cities: CityState[];
  temperature: TemperatureState;
  windSpeed: WindSpeedState;
}

export interface CityState {
  name: string;
  lat: number;
  lon: number;
}

// I use city name as the key since it's unique and for simplicity
// In real case it should be changed to unique ID
export interface TemperatureState {
  [cityName: string]: number;
}

export interface WindSpeedState {
  [cityName: string]: number;
}
