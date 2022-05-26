import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryEquipmentComponent } from './machinery-equipment.component';

describe('MachineryEquipmentComponent', () => {
  let component: MachineryEquipmentComponent;
  let fixture: ComponentFixture<MachineryEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineryEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
