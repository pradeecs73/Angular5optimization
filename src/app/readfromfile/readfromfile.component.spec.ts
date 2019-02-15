import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfromfileComponent } from './readfromfile.component';

describe('ReadfromfileComponent', () => {
  let component: ReadfromfileComponent;
  let fixture: ComponentFixture<ReadfromfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfromfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfromfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
