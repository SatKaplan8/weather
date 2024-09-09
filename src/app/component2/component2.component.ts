import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component implements OnChanges{
  @Input() location: string = '';
  precipitation: string = '0 mm';
  humidity: string = '0%';
  wind: string = '0 km/h';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['location']) {
      this.fetchWeatherDetails(this.location);
    }
  }

  fetchWeatherDetails(location: string) {
    if (!location) return;

    const apiKey = '62496bfac74d40628db103958240709';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert('Location not found');
        } else {
          this.updateWeatherDetails(data);
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }

  updateWeatherDetails(data: any) {
    const weather = data.current;
    this.precipitation = `${weather.precip_mm || 0} mm`;
    this.humidity = `${weather.humidity}%`;
    this.wind = `${weather.wind_kph} km/h`;
  }
}
