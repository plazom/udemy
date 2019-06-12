import { Component, OnInit, Input, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input('carItem') car: { name: string, year: number };
  @ContentChild('carHeading', {static:false}) carHeading:ElementRef;
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  ngAfterViewInit()
  {
    console.log(this.carHeading);
  }
}
