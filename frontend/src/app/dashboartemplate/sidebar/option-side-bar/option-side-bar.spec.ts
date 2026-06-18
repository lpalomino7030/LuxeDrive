import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSideBar } from './option-side-bar';

describe('OptionSideBar', () => {
  let component: OptionSideBar;
  let fixture: ComponentFixture<OptionSideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionSideBar],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionSideBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
