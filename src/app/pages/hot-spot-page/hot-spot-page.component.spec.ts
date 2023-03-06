import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSpotPageComponent } from './hot-spot-page.component';

describe('HotSpotPageComponent', () => {
  let component: HotSpotPageComponent;
  let fixture: ComponentFixture<HotSpotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotSpotPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotSpotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
