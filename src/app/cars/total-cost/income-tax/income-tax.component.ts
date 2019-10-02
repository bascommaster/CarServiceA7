import { Component, OnInit } from '@angular/core';
import { CostSharedService } from '../../cost-shared.service';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.less']
})
export class IncomeTaxComponent implements OnInit {

private incomeTax = 18;
income: number;

  constructor(
    private costSharedService: CostSharedService
  ) {}

  ngOnInit() {

    this.costSharedService.totalCostSource$.subscribe(cost => {
      this.income = cost * this.incomeTax / 100;
    });
  }

}
