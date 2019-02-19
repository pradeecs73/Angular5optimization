import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1componentComponent } from './child1component.component';

describe('Child1componentComponent', () => {
  let component: Child1componentComponent;
  let fixture: ComponentFixture<Child1componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
