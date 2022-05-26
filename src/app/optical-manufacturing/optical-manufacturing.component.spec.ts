import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticalManufacturingComponent } from './optical-manufacturing.component';

describe('OpticalManufacturingComponent', () => {
  let component: OpticalManufacturingComponent;
  let fixture: ComponentFixture<OpticalManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpticalManufacturingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticalManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
