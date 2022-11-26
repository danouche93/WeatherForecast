import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CitiesListComponent } from './weather/cities-list/cities-list.component';
import { WeatherViewComponent } from './weather/weather-view/weather-view.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './ui/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CitiesListComponent,
    WeatherViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
