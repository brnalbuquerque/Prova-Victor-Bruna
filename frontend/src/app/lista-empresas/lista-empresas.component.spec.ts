import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpresasComponent } from './lista-empresas.component';

describe('ListaEmpresasComponent', () => {
  let component: ListaEmpresasComponent;
  let fixture: ComponentFixture<ListaEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEmpresasComponent]
    });
    fixture = TestBed.createComponent(ListaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
