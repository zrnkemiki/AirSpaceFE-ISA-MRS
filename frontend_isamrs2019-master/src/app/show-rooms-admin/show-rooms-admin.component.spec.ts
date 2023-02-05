import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoomsAdminComponent } from './show-rooms-admin.component';

describe('ShowRoomsAdminComponent', () => {
  let component: ShowRoomsAdminComponent;
  let fixture: ComponentFixture<ShowRoomsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRoomsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRoomsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
