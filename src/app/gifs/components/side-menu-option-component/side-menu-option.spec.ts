import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuOption } from './side-menu-option';

describe('SideMenuOption', () => {
  let component: SideMenuOption;
  let fixture: ComponentFixture<SideMenuOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
