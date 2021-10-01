import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDepartamentoComponent } from './criar-departamento.component';

describe('CriarDepartamentoComponent', () => {
  let component: CriarDepartamentoComponent;
  let fixture: ComponentFixture<CriarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
