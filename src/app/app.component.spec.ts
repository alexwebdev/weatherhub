import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeatherStore } from './store/weather.store';

class MockWeatherStore {

}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: WeatherStore,
          useClass: MockWeatherStore
        }
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
