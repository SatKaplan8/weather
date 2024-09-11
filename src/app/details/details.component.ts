import { Component, Input, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  precipitation: any
  humidity: any
  wind: any
  location: any

  @Input('data') set data(data: any) {
    this.precipitation = data.current?.precip_mm
    this.humidity = data.current?.humidity
    this.wind = data?.current?.wind_kph
  }
}
