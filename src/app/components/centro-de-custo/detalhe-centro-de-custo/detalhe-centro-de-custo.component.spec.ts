import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCentroDeCustoComponent } from './detalhe-centro-de-custo.component';

describe('DetalheCentroDeCustoComponent', () => {
  let component: DetalheCentroDeCustoComponent;
  let fixture: ComponentFixture<DetalheCentroDeCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCentroDeCustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCentroDeCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
