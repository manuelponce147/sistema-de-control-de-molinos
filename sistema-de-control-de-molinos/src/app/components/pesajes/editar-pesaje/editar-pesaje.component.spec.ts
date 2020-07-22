import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPesajeComponent } from './editar-pesaje.component';

describe('EditarPesajeComponent', () => {
  let component: EditarPesajeComponent;
  let fixture: ComponentFixture<EditarPesajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPesajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPesajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
