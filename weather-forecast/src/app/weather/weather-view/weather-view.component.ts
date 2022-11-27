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
  weather: any;
  fiveDaysWeather: any[] = [];
  nowDate = new Date();
  loading: boolean = false;

  constructor(private openWeatherService: OpenweatherService) { }

  ngOnInit() {
    this.loading = true;
    this.openWeatherService.GetWeather(this.city.location).subscribe(res => {
      this.weather = res;
      this.initFiveDaysArray();
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
    })
  }

  initFiveDaysArray() {
    for (let i = 0; i < this.weather.list.length; i = i + 8) {
      this.fiveDaysWeather.push(this.weather.list[i]);
    }
  }

}
