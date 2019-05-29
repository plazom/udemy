import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  canAddCar:boolean = false;
  constructor() {
    setTimeout(()=>this.canAddCar = true, 4000);
   }

  ngOnInit() {
  }

  
}
