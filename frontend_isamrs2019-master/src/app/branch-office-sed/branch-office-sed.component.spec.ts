import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficeSedComponent } from './branch-office-sed.component';

describe('BranchOfficeSedComponent', () => {
  let component: BranchOfficeSedComponent;
  let fixture: ComponentFixture<BranchOfficeSedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchOfficeSedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchOfficeSedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
