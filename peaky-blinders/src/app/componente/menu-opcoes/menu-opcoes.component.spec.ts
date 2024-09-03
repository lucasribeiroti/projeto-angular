import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOpcoesComponent } from './menu-opcoes.component';

describe('MenuOpcoesComponent', () => {
  let component: MenuOpcoesComponent;
  let fixture: ComponentFixture<MenuOpcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuOpcoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
