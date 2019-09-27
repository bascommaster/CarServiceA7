import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {

  car: Car;

  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    const id = +this.route.snapshot.params['id']; // znak + przetworzy id na liczbę

    this.carsService.getCar(id).subscribe(car => {
      this.car = car;
      console.log(this.car);
    });
  }

}
