import { WeatherActions } from './weather.actions';
import { initialState, weatherReducer } from './weather.reducer';

describe('weatherReducer', () => {
  describe('getCityWeatherSuccess', () => {
    // arrange
    // act
    const action = WeatherActions.getCityWeatherSuccess({
      cityName: 'Szczecin',
      data: {
        main: {
          temp: 20
        },
        wind: {
          speed: 5
        }
      }
    });
    const state = weatherReducer(initialState, action);

    // assert
    it('should update temperature and wind speed data', () => {
      expect(state.temperature['Szczecin']).toEqual(20);
      expect(state.windSpeed['Szczecin']).toEqual(5);
    })
  });

  describe('getForecastSuccess', () => {
    // arrange
    // act
    const action = WeatherActions.getForecastSuccess({
      cityName: 'Szczecin',
      data: [
        {
          dt_txt: '2022-04-07 15:00:00',
          main: {
            temp: 10
          }
        },
        {
          dt_txt: '2022-04-07 18:00:00',
          main: {
            temp: 10
          }
        },
        {
          dt_txt: '2022-04-07 21:00:00',
          main: {
            temp: 9
          }
        }
      ]
    });
    const state = weatherReducer(initialState, action);

    // assert
    it('should update forecast data', () => {
      expect(state.forecast['Szczecin'].length).toEqual(3);
    })
  });
});
