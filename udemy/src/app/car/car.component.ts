import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carName:string = 'Ford';
  carYear:number = 2015;
  getName():string
  {
    return this.carName;
  }
}
