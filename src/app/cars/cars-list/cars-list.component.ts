import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  // pozwala zobaczyć style lokalne z innych komponentów
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {

@ViewChild('totalCostRef')
totalCostRef: TotalCostComponent;

totalCost: number;
grossCost: number;

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
];

  constructor() { }

  ngOnInit() {
    this.countTotalCost();
  }

  ngAfterViewInit() {
    this.totalCostRef.showGross();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void{
    this.totalCost = this.cars.map(car => car.cost)
                    .reduce((prerv, next) => prerv + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
