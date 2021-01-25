import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddheaderComponent } from './addheader.component';

describe('AddheaderComponent', () => {
  let component: AddheaderComponent;
  let fixture: ComponentFixture<AddheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
