import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { Location } from 'src/app/models/location.model';
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
      forkJoin([this.teleportService.GetCityImage(c), this.teleportService.GetCityLocalTime(c), this.teleportService.GetLocation(c)]).subscribe(res => {
        c.image = res[0];
        c.localTime = res[1];
        c.location = new Location();
        c.location.latitude = res[2]["latitude"];
        c.location.longitude = res[2]["longitude"];
      }, err => {
        console.log(err);
      })
    })
  }

}
