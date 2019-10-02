import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges,  } from '@angular/core';


@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCostComponent implements OnChanges {


@Input()
totalCost: number;

@Output()
shownGross: EventEmitter<number> = new EventEmitter<number>();

private VAT = 1.23;
costThreshold = 5000;
isCostToLow = false;

ngOnChanges(changes: SimpleChanges) {
  this.isCostToLow = changes['totalCost'].currentValue < this.costThreshold;

  console.log('previousValue', changes['totalCost'].previousValue);
  console.log('currentValue', changes['totalCost'].currentValue);
  console.log('isFirstChange', changes['totalCost'].isFirstChange());
}

showGross(): void {
  this.shownGross.emit(this.totalCost * this.VAT);
}

}
