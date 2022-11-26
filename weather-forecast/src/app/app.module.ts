import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CitiesListComponent } from './weather/cities-list/cities-list.component';
import { WeatherViewComponent } from './weather/weather-view/weather-view.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './ui/header/header.component';
import { InputComponent } from './ui/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CitiesListComponent,
    WeatherViewComponent,
    HeaderComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
