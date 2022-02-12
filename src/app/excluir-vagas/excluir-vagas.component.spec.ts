import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirVagasComponent } from './excluir-vagas.component';

describe('ExcluirVagasComponent', () => {
  let component: ExcluirVagasComponent;
  let fixture: ComponentFixture<ExcluirVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
