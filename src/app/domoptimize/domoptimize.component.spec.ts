import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomoptimizeComponent } from './domoptimize.component';

describe('DomoptimizeComponent', () => {
  let component: DomoptimizeComponent;
  let fixture: ComponentFixture<DomoptimizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomoptimizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomoptimizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
