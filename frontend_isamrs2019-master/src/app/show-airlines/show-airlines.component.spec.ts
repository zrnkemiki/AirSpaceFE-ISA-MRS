import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAirlinesComponent } from './show-airlines.component';

describe('ShowAirlinesComponent', () => {
  let component: ShowAirlinesComponent;
  let fixture: ComponentFixture<ShowAirlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAirlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
