import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboartemplate } from './dashboartemplate';

describe('Dashboartemplate', () => {
  let component: Dashboartemplate;
  let fixture: ComponentFixture<Dashboartemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboartemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboartemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
