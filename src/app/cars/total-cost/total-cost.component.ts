import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy,  } from '@angular/core';


@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCostComponent {

@Input()
totalCost: number;

@Output()
shownGross: EventEmitter<number> = new EventEmitter<number>();

private VAT = 1.23;

showGross(): void {
  this.shownGross.emit(this.totalCost * this.VAT);
}

}
