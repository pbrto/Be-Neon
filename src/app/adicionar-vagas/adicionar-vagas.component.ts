import { Component, OnInit } from '@angular/core';
import{ Vaga } from '../models/Vagas.models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-adicionar-vagas',
  templateUrl: './adicionar-vagas.component.html',
  styleUrls: ['./adicionar-vagas.component.css']
})
export class AdicionarVagasComponent implements OnInit {

  public vaga : Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

  cadastar(){
    this._vagasService.CadatrarVaga(this.vaga).subscribe(
      vaga=>{this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao Cadastrar")}
    );

    window.location.href="/mural";
  }



}
