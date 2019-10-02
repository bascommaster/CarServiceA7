import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CostSharedService } from '../cost-shared.service';
import { CarTableRowComponent } from '../car-table-row/car-table-row.component';


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

@ViewChildren(CarTableRowComponent) carRows: QueryList<CarTableRowComponent>;

totalCost: number;
grossCost: number;
carForm: FormGroup;

cars: Car[];

  constructor(
      private carsSrvice: CarsService,
      private router: Router,
      private formBuilder: FormBuilder,
      private costSharedService: CostSharedService
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
      model: ['', Validators.required],
      type: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: '',
      deadline: '',
      color:  '',
      power: '',
      clientFirstName: '',
      clientSurname: '',
      cost: '',
      isFullyDamaged: '',
      year: ''
    });
  }

getCars(): void {
  this.carsSrvice.getAllCars().subscribe(cars => {
    this.cars = cars;
    this.countTotalCost();
    this.costSharedService.shareCost(this.totalCost);
  });
}

addCar() {
  this.carsSrvice.addCar(this.carForm.value).subscribe(() => {
    this.getCars();
  });
}

goToCarDetails(car: Car) {
  this.router.navigate(['/cars', car.id]);
}

onDeleteCar(car: Car, event: Event) {
  this.carsSrvice.deleteCar(car.id).subscribe(() => {
    this.getCars();
  });
}



  ngAfterViewInit() {
    this.totalCostRef.showGross();
    this.grossCost = 0; // becouse of *ngIf in car-list-component.html

    this.carRows.changes.subscribe(() =>{
      if(this.carRows.first.car.clientSurname === 'Kowalski') {
        console.log('warning! client Kowalski is coming, better go holiday');
      }
    });
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    this.totalCost = this.cars.map(car => +car.cost)
                    .reduce((prerv, next) => prerv + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
