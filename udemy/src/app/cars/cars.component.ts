import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carName: string = '';
  addCarStatus: boolean = false;
  cars: Array<string> = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  dates:Array<Date> = [new Date(2015, 10, 5), new Date(2011, 3, 10), new Date(2017, 7, 14), new Date(2000, 9, 4)]
  ngOnInit() {
  }

  addCar(): void {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
