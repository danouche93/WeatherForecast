import { Component, OnInit } from '@angular/core';
import { City } from '../models/city.model';
import { TeleportService } from '../services/teleport/teleport.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cities: City[] = [];
  searchText: string;

  constructor(private teleportService: TeleportService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(){
    this.teleportService.GetCities(this.searchText).subscribe(res => {
      this.cities = res;
    }, err => {
      console.log(err);
    })
  }

  onInputSearch(event) {
    this.searchText = event.text;
    this.getCities();
  }

}
