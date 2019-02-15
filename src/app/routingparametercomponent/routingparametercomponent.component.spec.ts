import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingparametercomponentComponent } from './routingparametercomponent.component';

describe('RoutingparametercomponentComponent', () => {
  let component: RoutingparametercomponentComponent;
  let fixture: ComponentFixture<RoutingparametercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingparametercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingparametercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
