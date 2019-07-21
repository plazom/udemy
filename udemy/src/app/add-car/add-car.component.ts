import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent{
  @Output() onCarAdd = new EventEmitter<String>();
  carName='';

  addCar(): void {
    this.onCarAdd.emit(this.carName);
    this.carName = '';
  }
}
