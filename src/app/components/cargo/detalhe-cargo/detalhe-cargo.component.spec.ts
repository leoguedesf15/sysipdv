import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCargoComponent } from './detalhe-cargo.component';

describe('DetalheCargoComponent', () => {
  let component: DetalheCargoComponent;
  let fixture: ComponentFixture<DetalheCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
