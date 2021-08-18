import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';

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

  it('Changing currentPage changes templates #page to same text value', () => {
    component.currentPage = 2;
    fixture.detectChanges();
    console.log(pageEl);
    expect(pageEl.nativeElement.innerText).toBe(`${component.currentPage}`);
  });

  fit('#emitSelection should be triggered by clicking a button', fakeAsync(() => {
    spyOn(component, 'emitSelection');
    let btn = fixture.debugElement.nativeElement.querySelector('button.first');
    btn.click();
    tick();

    expect(component.emitSelection).toHaveBeenCalled();
  }));
});
