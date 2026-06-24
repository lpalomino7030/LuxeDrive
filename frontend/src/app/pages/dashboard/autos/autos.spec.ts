import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutosComponent } from './autos';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('AutosComponent', () => {
  let component: AutosComponent;
  let fixture: ComponentFixture<AutosComponent>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutosComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AutosComponent);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar autos desde API', () => {
    fixture.detectChanges();

    const req = httpTesting.expectOne('http://localhost:8082/autos');

    expect(req.request.method).toBe('GET');

    req.flush([
      {
        idAutos: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2022,
        precio: 10000,
        color: 'Rojo',
        tipo: 'Sedan',
        estado: 'Disponible',
      },
    ]);

    expect(component.autos.length).toBe(1);
    expect(component.autos[0].marca).toBe('Toyota');
  });

  it('debería guardar un auto', () => {
    component.auto = {
      marca: 'Mazda',
      modelo: 'CX5',
      anio: 2024,
      precio: 30000,
      color: 'Negro',
      tipo: 'SUV',
      estado: 'Disponible',
    };

    component.guardarAuto();

    const req = httpTesting.expectOne('http://localhost:8082/autos');

    expect(req.request.method).toBe('POST');

    req.flush(component.auto);
  });

  it('debería actualizar un auto', () => {
    component.auto = {
      idAutos: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
    };

    component.actualizarAuto();

    const req = httpTesting.expectOne('http://localhost:8082/autos/1');

    expect(req.request.method).toBe('PUT');

    req.flush(component.auto);
  });

  it('debería eliminar un auto', () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);

    component.eliminarAuto(1);

    const req = httpTesting.expectOne('http://localhost:8082/autos/1');

    expect(req.request.method).toBe('DELETE');

    req.flush({});
  });
});
