import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsectionComponent } from './hrsection.component';

describe('HrsectionComponent', () => {
  let component: HrsectionComponent;
  let fixture: ComponentFixture<HrsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
