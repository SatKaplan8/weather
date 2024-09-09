import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  location: string = '';
  day: string = 'Day';
  date: string = 'Date';
  temperature: string = 'Temperature';
  weatherLogo: string = '';

  fetchWeatherData() {
    if (!this.location) {
      alert('Please enter a location');
      return;
    }

    const apiKey = '62496bfac74d40628db103958240709'; 
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.location}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert('Location not found');
        } else {
          this.updateWeatherInfo(data);
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }

  updateWeatherInfo(data: any) {
    const weather = data.current;
    const tempC = weather.temp_c;
    const date = new Date(); // Create a new Date object
    
    // Define formatting options
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    // Create a new Intl.DateTimeFormat instance with the desired locale and options
    const formatter = new Intl.DateTimeFormat('en-US', options);
    
    // Format the date
    const formattedDate = formatter.format(date);
    
    // Split formattedDate if necessary (e.g., for separate day and date)
    const [dayOfWeek, monthDayYear] = formattedDate.split(', ');
    this.day = dayOfWeek;
    this.date = monthDayYear;

    this.temperature = `${tempC}°C`;
    this.weatherLogo = this.getWeatherLogo(tempC);
  }

  getWeatherLogo(tempC: number): string {
    if (tempC <= 0) {
      return 'assets/snowflake.jpg'; 
    } else if (tempC <= 15) {
      return 'assets/cloudy.png'; 
    } else if (tempC <= 25) {
      return 'assets/weather1.png'; 
    } else {
      return 'assets/sunny.png'; 
    }
  }
}
