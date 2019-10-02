import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: '[app-car-table-row]',
  templateUrl: './car-table-row.component.html',
  styleUrls: ['./car-table-row.component.less']
})
export class CarTableRowComponent implements OnInit {

  @Input() car: Car;
  @Output() removedCar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeCar(car: any, event: Event) {
    event.stopPropagation();
    this.removedCar.emit(car);
  }

}
