import { TestBed } from '@angular/core/testing';

import { CostSharedService } from './cost-shared.service';

describe('CostSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostSharedService = TestBed.get(CostSharedService);
    expect(service).toBeTruthy();
  });
});
