import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  addCarStatus: string = '';
  inputText: string = 'Значение по умолчанию';
  ngOnInit() {
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена!';
  }
  onKeyUp(event: KeyboardEvent) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }
}
