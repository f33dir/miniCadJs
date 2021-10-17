import { TestBed } from '@angular/core/testing';

import { EdituiserviceService } from './edituiservice.service';

describe('EdituiserviceService', () => {
  let service: EdituiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdituiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
