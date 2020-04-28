import { TestBed } from '@angular/core/testing';

import { CritterService } from './critter.service';

describe('CritterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CritterService = TestBed.get(CritterService);
    expect(service).toBeTruthy();
  });
});
