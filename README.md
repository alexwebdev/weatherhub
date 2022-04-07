# Weatherhub

Weatherhub allows you to check current weather conditions in 5 European cities. You can also check forecast in the next hours.

The app is simple enough to show key features. There's a big potential to improve and develop new features.

## Tech stack
The project is generated with Angular v13. I added ngrx to easily manage app state. Ngrx effects allows
to react to dispatched actions and perform api requests.

There is also fxFlex package installed and MatExpansion module to manage accordion component.

## Limitations
- I had to expose my openweathermap api key to request their data. Please replace it in environment config.
- City list is predefined. I chose 5 random European cities.
- Weather data is fetched once the app starts. It's not updated in intervals etc.
- Forecast data is fetched each time a panel is expanded. Not a most efficient solution but enough for this use case :)
- No error handling - in case weather requests fail.
- No loading indicators to show that data is being fetched.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
