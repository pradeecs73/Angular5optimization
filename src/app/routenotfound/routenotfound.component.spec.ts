import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutenotfoundComponent } from './routenotfound.component';

describe('RoutenotfoundComponent', () => {
  let component: RoutenotfoundComponent;
  let fixture: ComponentFixture<RoutenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
