import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Output('onAddCar') carEmitter:EventEmitter<{name:string, year:number}> = new EventEmitter();
  carName: string = '';
  carYear: number = 2017;

  constructor() { }

  ngOnInit() {
  }

  addCar(): void {
    this.carEmitter.emit({
      name:this.carName,
      year:this.carYear
    });
    this.carName = '';
    this.carYear = 2017;
  }

}
