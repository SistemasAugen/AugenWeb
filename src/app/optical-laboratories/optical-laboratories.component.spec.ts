import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticalLaboratoriesComponent } from './optical-laboratories.component';

describe('OpticalLaboratoriesComponent', () => {
  let component: OpticalLaboratoriesComponent;
  let fixture: ComponentFixture<OpticalLaboratoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpticalLaboratoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticalLaboratoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
