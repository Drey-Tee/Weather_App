import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  incomingSharedData : any 

  constructor(private sharedService : SharedDataService) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData(){
    this.sharedService.getWeatherData().subscribe({
      next : (data) => {
        this.incomingSharedData = data;
      }
    })
  }

}
