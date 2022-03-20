import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { allAppRoutes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
;


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
