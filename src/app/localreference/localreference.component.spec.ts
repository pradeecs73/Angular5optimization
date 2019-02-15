import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalreferenceComponent } from './localreference.component';

describe('LocalreferenceComponent', () => {
  let component: LocalreferenceComponent;
  let fixture: ComponentFixture<LocalreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
