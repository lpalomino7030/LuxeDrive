import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloEncabezado } from './titulo-encabezado';

describe('TituloEncabezado', () => {
  let component: TituloEncabezado;
  let fixture: ComponentFixture<TituloEncabezado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloEncabezado],
    }).compileComponents();

    fixture = TestBed.createComponent(TituloEncabezado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
