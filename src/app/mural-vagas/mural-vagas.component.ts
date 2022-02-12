import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];

  public vaga : Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  cadastar(){
    this._vagasService.CadatrarVaga(this.vaga).subscribe(
      vaga=>{this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao Cadastrar")}
    );

    window.location.href="/mural";
  }

  atualizar(id:number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      vaga=>{this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao Atualizar Vaga")}
    );

    window.location.href="/mural";  
  }

  excluir(id:number){
    this._vagasService.removerVaga(id).subscribe(
      vaga=>{this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao Remover Vaga")}
    );

    window.location.href="/mural";

  }

  listarVagas(){
    this._vagasService.getVagas()

    .subscribe(
      retornaVaga => {
         this.vagas = retornaVaga.map(
           item => {
             return new Vaga(
               item.id,
               item.nome,
               item.foto,
               item.descricao,
               item.salario
             );  
           }
         )
      }
    )
  }
}







