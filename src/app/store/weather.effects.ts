import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions) {}
}
