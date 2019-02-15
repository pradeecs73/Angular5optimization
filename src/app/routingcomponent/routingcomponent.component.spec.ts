import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingcomponentComponent } from './routingcomponent.component';

describe('RoutingcomponentComponent', () => {
  let component: RoutingcomponentComponent;
  let fixture: ComponentFixture<RoutingcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
