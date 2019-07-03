import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'udemy';

  // headerText = "Создание своей диррективы.";
  // items = [1, 2, 3, 4, 5];
  // current = 1;
  // onClick(number:number)
  // {
  //   this.current = number;
  // }

  // name = 'WebForMyself';
  // pi = Math.PI;
  // money = 350;
  // date = new Date();
  // amount = 0.45;
  // object = {
  //   foo: 'bar',
  //   baz: 'qux',
  //   nested:
  //   {
  //     xyz: 3,
  //     numbers: [1, 2, 3]
  //   }
  // }

  // num = 2;

  searchCar = '';
  cars = [
    { name: 'Ford', descr: 'WFM 1' },
    { name: 'Mazda', descr: 'WFM 2' },
    { name: 'Bently', descr: 'WFM 3' },
    { name: 'Audi', descr: 'WFM 4' },
    { name: 'Mercedes', descr: 'WFM 5' },
    { name: 'BMW', descr: 'WFM 6' }
  ];
}
