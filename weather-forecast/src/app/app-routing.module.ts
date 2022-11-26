import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full',
  },
  {
    path: 'weather', component: WeatherComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
