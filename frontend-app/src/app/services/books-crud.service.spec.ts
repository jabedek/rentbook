import { TestBed } from '@angular/core/testing';

import { BooksCrudService } from './books-crud.service';

describe('BooksCrudService', () => {
  let service: BooksCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
