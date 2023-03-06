import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiatrictPageComponent } from './diatrict-page.component';

describe('DiatrictPageComponent', () => {
  let component: DiatrictPageComponent;
  let fixture: ComponentFixture<DiatrictPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiatrictPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiatrictPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
