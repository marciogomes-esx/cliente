import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFormsComponent } from './clientes-forms.component';

describe('ClientesFormsComponent', () => {
  let component: ClientesFormsComponent;
  let fixture: ComponentFixture<ClientesFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesFormsComponent]
    });
    fixture = TestBed.createComponent(ClientesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
