import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup
  incomingData : any 

  constructor(private formBuilder: FormBuilder, private weatherService : WeatherService, private sharedService : SharedDataService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['',Validators.required]
    });
    
  }
  getWeatherData(){
    this.weatherService.getWeatherInfo(this.weatherSearchForm.value.location).subscribe({
     next:(data)=> {
      this.incomingData = data
      this.sharedService.loadWeatherData(data)
      console.log(this.incomingData)
      console.log(this.incomingData.name)
     } 
    })
  }

}
