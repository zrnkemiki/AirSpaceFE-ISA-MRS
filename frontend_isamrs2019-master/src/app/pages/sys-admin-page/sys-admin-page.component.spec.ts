import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAdminPageComponent } from './sys-admin-page.component';

describe('SysAdminPageComponent', () => {
  let component: SysAdminPageComponent;
  let fixture: ComponentFixture<SysAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
