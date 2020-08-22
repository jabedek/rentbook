import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredisplayComponent } from './storedisplay.component';

describe('StoredisplayComponent', () => {
  let component: StoredisplayComponent;
  let fixture: ComponentFixture<StoredisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
