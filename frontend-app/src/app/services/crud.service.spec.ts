import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  let crudService: CrudService;
  // let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CrudService] });
    crudService = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(crudService).toBeTruthy();
  });
});
