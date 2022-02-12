import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarVagasComponent } from './adicionar-vagas.component';

describe('AdicionarVagasComponent', () => {
  let component: AdicionarVagasComponent;
  let fixture: ComponentFixture<AdicionarVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
