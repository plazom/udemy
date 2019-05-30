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
  ngOnInit() {
  }

  addCar(): void {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
  setBigCarText(car: string): boolean {
    return car.length > 4 ? true : false;
  }
}
