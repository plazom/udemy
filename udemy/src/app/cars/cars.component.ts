import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carName: string = '';
  carYear: number = 2017;
  addCarStatus: boolean = false;
  cars: Array<{ name: string, year: number }> = [
    {
      name: 'Ford',
      year: 2017
    },
    {
      name: 'Audi',
      year: 2015
    },
    {
      name: 'Mazda',
      year: 2010
    },
    {
      name: 'Lada',
      year: 2018
    },
    {
      name: 'Bently',
      year: 2014
    }
  ];
  dates: Array<Date> = [new Date(2015, 10, 5), new Date(2011, 3, 10), new Date(2017, 7, 14), new Date(2000, 9, 4)]
  ngOnInit() {
  }

  addCar(): void {
    this.addCarStatus = true;
    this.cars.push({ name: this.carName, year: this.carYear });
    this.carName = '';
  }
}
