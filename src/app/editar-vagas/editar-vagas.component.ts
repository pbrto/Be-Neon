import { Component, OnInit } from '@angular/core';
import{ Vaga } from '../models/Vagas.models';
import { VagasService } from '../vagas.service'; 


@Component({
  selector: 'app-editar-vagas',
  templateUrl: './editar-vagas.component.html',
  styleUrls: ['./editar-vagas.component.css']
})
export class EditarVagasComponent implements OnInit {

  public vaga : Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService: VagasService) { }


  ngOnInit(): void {
  }


  atualizar(id:number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      vaga=>{this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao Atualizar Vaga")}
    );

    window.location.href="/mural";  
  }

 


}
