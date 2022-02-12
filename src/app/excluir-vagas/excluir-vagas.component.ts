import { Component, OnInit } from '@angular/core';
import{ Vaga } from '../models/Vagas.models';
import { VagasService } from '../vagas.service'; 

@Component({
  selector: 'app-excluir-vagas',
  templateUrl: './excluir-vagas.component.html',
  styleUrls: ['./excluir-vagas.component.css']
})
export class ExcluirVagasComponent implements OnInit {

  public vaga : Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService: VagasService) { }


  ngOnInit(): void {
  }


  excluir(id:number){
    this._vagasService.removerVaga(id).subscribe(
      vaga=>{this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao Remover Vaga")}
    );

    window.location.href="/mural";

  }


}
