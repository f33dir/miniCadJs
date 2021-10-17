import { TestBed } from '@angular/core/testing';

import { ConstructionmanagerService } from './constructionmanager.service';

describe('ConstructionmanagerService', () => {
  let service: ConstructionmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructionmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
