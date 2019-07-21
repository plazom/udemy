import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  cars = [
    { name: 'Ford', isSold: true },
    { name: 'Mazda', isSold: false },
    { name: 'Bently', isSold: false },
    { name: 'Audi', isSold: true },
    { name: 'Mercedes', isSold: false },
    { name: 'BMW', isSold: true }
  ];

  addCarToList(carName:string):void{
    this.cars.push({
      name: carName,
      isSold:false
    });
  }
}
