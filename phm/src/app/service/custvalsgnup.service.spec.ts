import { TestBed } from '@angular/core/testing';

import { CustvalsgnupService } from './custvalsgnup.service';

describe('CustvalsgnupService', () => {
  let service: CustvalsgnupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustvalsgnupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
