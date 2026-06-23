import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Autos } from './autos';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('Autos Component', () => {
  let component: Autos;
  let fixture: ComponentFixture<Autos>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autos],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Autos);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController); // Inyectamos el controlador de pruebas
    fixture.detectChanges();
  });

  it('debería crearse el componente Autos', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar lista de autos', () => {
    // Simulamos la respuesta de la API para que el test pase
    const req = httpTesting.expectOne('http://localhost:8082/autos');
    req.flush([]); // Simulamos que devuelve un array vacío

    expect(component.autos).toBeDefined();
    expect(Array.isArray(component.autos)).toBe(true);
  });
});
