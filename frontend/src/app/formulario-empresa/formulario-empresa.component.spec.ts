import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmpresaComponent } from './formulario-empresa.component';

describe('FormularioEmpresaComponent', () => {
  let component: FormularioEmpresaComponent;
  let fixture: ComponentFixture<FormularioEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEmpresaComponent]
    });
    fixture = TestBed.createComponent(FormularioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
