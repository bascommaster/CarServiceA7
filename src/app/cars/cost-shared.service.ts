import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostSharedService {

  constructor() { }

  totalCostSource$ = new Subject<number>();

  shareCost(cost: number) {
    this.totalCostSource$.next(cost);
  }
}
