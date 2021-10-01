import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCentroDeCustoComponent } from './form-centro-de-custo.component';

describe('FormCentroDeCustoComponent', () => {
  let component: FormCentroDeCustoComponent;
  let fixture: ComponentFixture<FormCentroDeCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCentroDeCustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCentroDeCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
