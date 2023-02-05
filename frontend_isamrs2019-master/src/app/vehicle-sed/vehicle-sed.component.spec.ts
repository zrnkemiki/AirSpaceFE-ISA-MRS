import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSEDComponent } from './vehicle-sed.component';

describe('VehicleSEDComponent', () => {
  let component: VehicleSEDComponent;
  let fixture: ComponentFixture<VehicleSEDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleSEDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
