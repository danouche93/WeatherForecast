import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { Image } from 'src/app/models/image.model';

@Injectable({
  providedIn: 'root'
})
export class TeleportService {

  apiUrl = 'https://api.teleport.org/api/cities';

  constructor(private httpClient: HttpClient) { }

  GetCities(name: string = null): Observable<City[]> {
    var route = this.apiUrl;
    if(name) route += "?search=" + name;
    return new Observable((observer) => {
      this.httpClient.get(route).subscribe(res => {
        observer.next(res['_embedded']['city:search-results']);
        observer.complete();
      }, err => {
        console.log(err);
        observer.error(err);
      })
    })
  }

  GetCityImage(city: City): Observable<Image> {
    return new Observable((observer) => {
      this.httpClient.get(city._links['city:item'].href).subscribe((res: any) => {
        if (res._links['city:urban_area']) {
          this.httpClient.get(res._links['city:urban_area'].href + 'images').subscribe((res: any) => {
            observer.next(res.photos[0].image);
            observer.complete();
          }, err => {
            console.log(err);
            observer.error(err);
          })
        } else {
          observer.next();
          observer.complete();
        }
      }, err => {
        console.log(err);
        observer.error(err);
      })
    })
  }

  GetCityLocalTime(city: City): Observable<Date> {
    return new Observable((observer) => {
      this.httpClient.get(city._links['city:item'].href).subscribe((res: any) => {
        if (res._links['city:timezone']) {
          this.httpClient.get(res._links['city:timezone'].href + 'offsets/?date=' + new Date().toISOString()).subscribe((res: any) => {
            let now = new Date();
            let currentOffset = now.getTimezoneOffset();
            let cityOffset = res.base_offset_min + currentOffset;

            let date = new Date(
              new Date().getTime() + cityOffset * 60 * 1000
            );
            observer.next(date);
            observer.complete();
          }, err => {
            console.log(err);
            observer.error(err);
          })
        } else {
          observer.next();
          observer.complete();
        }
      }, err => {
        console.log(err);
        observer.error(err);
      })
    })
  }

  GetLocation(city: City): Observable<Location> {
    return new Observable((observer) => {
      this.httpClient.get(city._links['city:item'].href).subscribe((res: any) => {
        observer.next(res.location.latlon);
        observer.complete();
      }, err => {
        console.log(err);
        observer.error(err);
      });
    });
  }
}
