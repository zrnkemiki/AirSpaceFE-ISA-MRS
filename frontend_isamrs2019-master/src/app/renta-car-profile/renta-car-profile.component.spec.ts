import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaCarProfileComponent } from './renta-car-profile.component';

describe('RentaCarProfileComponent', () => {
  let component: RentaCarProfileComponent;
  let fixture: ComponentFixture<RentaCarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaCarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaCarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
