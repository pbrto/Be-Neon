import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { EditarVagasComponent } from '../editar-vagas/editar-vagas.component';
import { ExcluirVagasComponent } from '../excluir-vagas/excluir-vagas.component';
import { AdicionarVagasComponent } from '../adicionar-vagas/adicionar-vagas.component';
 
const rotas: Routes = [
  {path: 'mural', component: MuralVagasComponent},
  {path: 'painel', component: PainelVagasComponent},
  {path: 'editar', component: EditarVagasComponent},
  {path: 'excluir', component: ExcluirVagasComponent},
  {path: 'adicionar', component: AdicionarVagasComponent},


  {path: '', redirectTo: '/mural', pathMatch:'full'}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
