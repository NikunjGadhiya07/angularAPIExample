import { TestBed } from '@angular/core/testing';

import { HttpproxyService } from './httpproxy.service';

describe('HttpproxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpproxyService = TestBed.get(HttpproxyService);
    expect(service).toBeTruthy();
  });
});
