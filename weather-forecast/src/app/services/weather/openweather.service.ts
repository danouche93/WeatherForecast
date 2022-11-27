import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from 'src/app/models/location.model';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  apiUrl = 'https://api.openweathermap.org/data/2.5/';
  apiKey = environment.openWeatherApiKey;

  constructor(private httpClient: HttpClient) { }

  GetWeather(location: Location): Observable<any> {
    return Observable.create((observer) => {
      this.httpClient.get(this.apiUrl + 'forecast?lat=' + location.latitude + '&lon=' + location.longitude + '&appid=' + this.apiKey + '&units=metric').subscribe(res => {
        observer.next(res);
        observer.complete();
      }, err => {
        console.log(err);
        observer.error(err);
      })
    })
  }
}
