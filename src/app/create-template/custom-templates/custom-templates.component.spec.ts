import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTemplatesComponent } from './custom-templates.component';

describe('CustomTemplatesComponent', () => {
  let component: CustomTemplatesComponent;
  let fixture: ComponentFixture<CustomTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
