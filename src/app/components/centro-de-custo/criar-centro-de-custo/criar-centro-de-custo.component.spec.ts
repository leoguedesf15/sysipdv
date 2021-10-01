import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCentroDeCustoComponent } from './criar-centro-de-custo.component';

describe('CriarCentroDeCustoComponent', () => {
  let component: CriarCentroDeCustoComponent;
  let fixture: ComponentFixture<CriarCentroDeCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCentroDeCustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCentroDeCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
