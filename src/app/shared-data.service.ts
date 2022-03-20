import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private availableWeatherData = new BehaviorSubject<any | null>(null);

  constructor() { }
  loadWeatherData(weatherData: any){
    this.availableWeatherData.next(weatherData);
  };
  getWeatherData(): Observable<any | null>{
    return this.availableWeatherData.asObservable();
  }
}
