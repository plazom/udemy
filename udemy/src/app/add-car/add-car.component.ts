import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Output('onAddCar') carEmitter:EventEmitter<{name:string, year:number}> = new EventEmitter();
  @ViewChild('carYearInput', {static:false}) carYearInput:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameEl:HTMLInputElement): void {
    console.log(this.carYearInput);
     this.carEmitter.emit({
       name:carNameEl.value,
       year:this.carYearInput.nativeElement.value
     });
     carNameEl.value = '';
     this.carYearInput.nativeElement.value = 2017;
  }

}
