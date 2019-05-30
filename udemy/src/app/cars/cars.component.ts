import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carName: string = '';
  addCarStatus: boolean = false;
  cars: Array<string> = ['Ford', 'Audi', 'BMW'];
  items: Array<object> = [{id:3, name:'item3'}, {id:2, name:'item2'}, {id:1, name:'item1'}];
  ngOnInit() {
  }

  addCar(): void {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
