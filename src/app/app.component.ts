import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
  location: string = '';

  // This method will be used to update location or handle data from Card1Component
  updateLocation(newLocation: string) {
    this.location = newLocation;
  }
}