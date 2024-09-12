import { Component, EventEmitter, Input, Output, output } from '@angular/core';
interface Idata {
  current: ICurrent
  location: any
}

interface ICurrent {
  temp_c: number
}
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  location: any
  temperature: any
  date: any;
  day: any;
  @Input() logo:any
  @Input('data')
  set data(data: Idata) {
    console.log(data)
    this.temperature = data.current.temp_c
  }

  @Output() updateLocation = new EventEmitter<string>()

  onKeyPress(event: any) {
    console.log("update location", event.target.value)
    if(event.key=='Enter'){
    const newLocation = event.target.value
    
    this.updateLocation.emit(newLocation)
  }
}
}
