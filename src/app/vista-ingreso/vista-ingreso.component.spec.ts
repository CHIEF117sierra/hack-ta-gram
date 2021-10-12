import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaIngresoComponent } from './vista-ingreso.component';

describe('VistaIngresoComponent', () => {
  let component: VistaIngresoComponent;
  let fixture: ComponentFixture<VistaIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
