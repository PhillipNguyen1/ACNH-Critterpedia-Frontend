import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCritterComponent } from './view-critter.component';

describe('ViewCritterComponent', () => {
  let component: ViewCritterComponent;
  let fixture: ComponentFixture<ViewCritterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCritterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
