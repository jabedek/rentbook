import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemDialogComponent } from './edit-item-dialog.component';

describe('EditItemDialogComponent', () => {
  let component: EditItemDialogComponent;
  let fixture: ComponentFixture<EditItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
