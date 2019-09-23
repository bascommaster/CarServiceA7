import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

cars: Car[] = [
  {
    id: 1,
    model: 'Mazda rx7',
    plate: '122343545E',
    deliveryDate: '21-03-2018',
    deadline: '05-04-2018',
    client: {
      firstName: 'Jan',
      surName: 'Kowalski'
    },
    cost: 300,
    isFullyDamaged: false
  },
  {
    id: 1,
    model: 'Mazda rx7',
    plate: '122343545E',
    deliveryDate: '21-03-2018',
    deadline: '05-04-2018',
    client: {
      firstName: 'Jan',
      surName: 'Kowalski'
    },
    cost: 400,
    isFullyDamaged: true
  },
  {
    id: 1,
    model: 'Mazda rx7',
    plate: '122343545E',
    deliveryDate: '21-03-2018',
    deadline: '05-04-2018',
    client: {
      firstName: 'Jan',
      surName: 'Kowalski'
    },
    cost: 600,
    isFullyDamaged: false
  }
]

  constructor() { }

  ngOnInit() {
  }

}
