import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTablePaginatorComponent } from './crud-table-paginator.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CrudTablePaginatorComponent', () => {
  let component: CrudTablePaginatorComponent;
  let fixture: ComponentFixture<CrudTablePaginatorComponent>;
  let pageEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudTablePaginatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTablePaginatorComponent);
    component = fixture.componentInstance;

    pageEl = fixture.debugElement.query(By.css('span'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Changing currentPage changes templates #page to the same value', () => {
    component.currentPage = 2;
    fixture.detectChanges();
    console.log(pageEl);

    expect(pageEl.nativeElement.innerText).toBe(`${component.currentPage}`);
  });
});
