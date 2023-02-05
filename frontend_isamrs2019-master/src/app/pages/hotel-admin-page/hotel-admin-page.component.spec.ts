import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAdminPageComponent } from './hotel-admin-page.component';

describe('HotelAdminPageComponent', () => {
  let component: HotelAdminPageComponent;
  let fixture: ComponentFixture<HotelAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
