import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleobservableComponent } from './simpleobservable.component';

describe('SimpleobservableComponent', () => {
  let component: SimpleobservableComponent;
  let fixture: ComponentFixture<SimpleobservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleobservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
