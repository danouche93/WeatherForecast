import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { City } from 'src/app/models/city-model';
import { TeleportService } from 'src/app/services/teleport/teleport.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnChanges {

  @Input() cities: City[] = [];

  constructor(private teleportService: TeleportService) { }

  ngOnChanges() {
    this.cities.map(c => {
      forkJoin([this.teleportService.GetCityImage(c), this.teleportService.GetCityLocalTime(c)]).subscribe(res => {
        c.image = res[0];
        c.localTime = res[1];
      }, err => {
        console.log(err);
      })
    })
  }

}
