import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


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
carForm: FormGroup;

cars: Car[];

  constructor(
      private carsSrvice: CarsService,
      private router: Router,
      private formBuilder: FormBuilder
      ) {
    this.grossCost = 0; // becouse of *ngIf in car-list-component.html
   }

  ngOnInit() {
    this.getCars();
    this.carForm = this.buildCarForm();
    // this.countTotalCost();
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: '',
      type: '',
      plate: '',
      deliveryDate: '',
      deadline: '',
      color:  '',
      power: '',
      clientFirstName: '',
      clientSurname: '',
      cost: '',
      isFullyDamaged: ''
    });
  }

getCars(): void {
  this.carsSrvice.getAllCars().subscribe(cars => {
    this.cars = cars;
    this.countTotalCost();
  });
}

goToCarDetails(car: Car) {
  this.router.navigate(['/cars', car.id]);
}



  ngAfterViewInit() {
    this.totalCostRef.showGross();
    this.grossCost = 0; // becouse of *ngIf in car-list-component.html
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    this.totalCost = this.cars.map(car => car.cost)
                    .reduce((prerv, next) => prerv + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
