import { Component, OnInit, OnDestroy } from '@angular/core';
import { CostSharedService } from '../../cost-shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.less']
})
export class IncomeTaxComponent implements OnInit, OnDestroy {

private incomeTax = 18;
income: number;

costSubscription: Subscription;

  constructor(
    private costSharedService: CostSharedService
  ) {}

  ngOnInit() {

    this.costSubscription = this.costSharedService.totalCostSource$.subscribe(cost => {
      this.income = cost * this.incomeTax / 100;
    });
  }

  ngOnDestroy() {
    if (this.costSubscription) {
      this.costSubscription.unsubscribe();
    }
  }

}
