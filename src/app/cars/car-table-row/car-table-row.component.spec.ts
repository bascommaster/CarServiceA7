import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTableRowComponent } from './car-table-row.component';

describe('CarTableRowComponent', () => {
  let component: CarTableRowComponent;
  let fixture: ComponentFixture<CarTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
