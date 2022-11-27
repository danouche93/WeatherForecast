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
  loading: boolean = false;

  constructor(private teleportService: TeleportService) { }

  ngOnInit() {
    this.findCities();
  }

  findCities() {
    this.loading = true;
    this.teleportService.FindCities(this.searchText).subscribe(res => {
      this.cities = res;
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
    })
  }

  onInputSearch(event) {
    this.searchText = event.text;
    this.findCities();
  }

}
