import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosRealizadosPage } from './pedidos-realizados.page';

describe('PedidosRealizadosPage', () => {
  let component: PedidosRealizadosPage;
  let fixture: ComponentFixture<PedidosRealizadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosRealizadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosRealizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
