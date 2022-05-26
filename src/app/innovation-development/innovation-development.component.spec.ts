import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationDevelopmentComponent } from './innovation-development.component';

describe('InnovationDevelopmentComponent', () => {
  let component: InnovationDevelopmentComponent;
  let fixture: ComponentFixture<InnovationDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
