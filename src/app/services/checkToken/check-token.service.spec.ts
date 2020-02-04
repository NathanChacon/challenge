import { TestBed } from '@angular/core/testing';

import { CheckTokenService } from './check-token.service';

describe('CheckTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckTokenService = TestBed.get(CheckTokenService);
    expect(service).toBeTruthy();
  });
});
