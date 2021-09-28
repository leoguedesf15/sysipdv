import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDepartamentoComponent } from './detalhe-departamento.component';

describe('DetalheDepartamentoComponent', () => {
  let component: DetalheDepartamentoComponent;
  let fixture: ComponentFixture<DetalheDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
