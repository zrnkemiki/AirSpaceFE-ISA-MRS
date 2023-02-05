import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRentacarsComponent } from './show-rentacars.component';

describe('ShowRentacarsComponent', () => {
  let component: ShowRentacarsComponent;
  let fixture: ComponentFixture<ShowRentacarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRentacarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRentacarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
