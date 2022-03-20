import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';

export const allAppRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'details', component: WeatherDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(allAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
