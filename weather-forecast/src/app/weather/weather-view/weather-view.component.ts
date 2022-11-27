import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.model';
import { OpenweatherService } from 'src/app/services/weather/openweather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {

  @Input() city: City;

  constructor(private openWeatherService: OpenweatherService) { }

  ngOnInit() {
    this.openWeatherService.GetWeather(this.city.location).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
