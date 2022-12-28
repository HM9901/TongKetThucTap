import { TestBed } from '@angular/core/testing';

import { CanLeaveEditGuardService } from './can-leave-edit-guard.service';

describe('CanLeaveEditGuardService', () => {
  let service: CanLeaveEditGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanLeaveEditGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
