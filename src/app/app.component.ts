import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data: any;
  defaultLocation = 'Tokyo'
  logo: any

  ngOnInit() {
    this.fetchWeatherData(this.defaultLocation)
  }

  handleLocationChange(newLocation: any) {
    console.log(newLocation)
    this.fetchWeatherData(newLocation)
  }

  fetchWeatherData(location: any) {
    const apiKey = '62496bfac74d40628db103958240709';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(resp => {
        if (resp.error) {
          alert('Location not found');
        } else {
          console.log(resp);
          this.data = resp
          this.getWeatherLogo(resp.current.tempC ?? 25)

        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }

  getWeatherLogo(tempC: number): void {
    if (tempC <= 0) {
      this.logo = 'assets/snowflake.jpg';
    } else if (tempC <= 15) {
      this.logo = 'assets/cloudy.png';
    } else if (tempC <= 25) {
      this.logo = 'assets/weather1.png';
    } else {
      this.logo = 'assets/sunny.png';
    }
  }
}