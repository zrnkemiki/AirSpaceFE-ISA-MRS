import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaCarReportComponent } from './renta-car-report.component';

describe('RentaCarReportComponent', () => {
  let component: RentaCarReportComponent;
  let fixture: ComponentFixture<RentaCarReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaCarReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaCarReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
