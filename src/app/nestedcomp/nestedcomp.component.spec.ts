import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedcompComponent } from './nestedcomp.component';

describe('NestedcompComponent', () => {
  let component: NestedcompComponent;
  let fixture: ComponentFixture<NestedcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
