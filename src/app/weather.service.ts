import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "63ba2c2fd0d1ae7e3523b97ffbc23c2a"
  constructor(private httpService : HttpClient) { }
  getWeatherInfo(location : string ){  
    return this.httpService.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=metric`);
  }
}
