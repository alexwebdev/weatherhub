export interface AppState {
  cities: CityState[];
}

interface CityState {
  name: string;
  lat: number;
  long: number;
}
