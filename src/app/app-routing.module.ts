import { DetalheCentroDeCustoComponent } from './components/centro-de-custo/detalhe-centro-de-custo/detalhe-centro-de-custo.component';
import { ListarCentroDeCustoComponent } from './components/centro-de-custo/listar-centro-de-custo/listar-centro-de-custo.component';
import { DetalheDepartamentoComponent } from './components/departamento/detalhe-departamento/detalhe-departamento.component';
import { ListarDepartamentoComponent } from './components/departamento/listar-departamento/listar-departamento.component';
import { DetalheCargoComponent } from './components/cargo/detalhe-cargo/detalhe-cargo.component';
import { ListarCargoComponent } from './components/cargo/listar-cargo/listar-cargo.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhe-usuario/detalhe-usuario.component';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'', component:FormLoginComponent},
    
    {path:'usuarios', component:ListarUsuarioComponent},
    {path:'usuarios/:id', component: DetalheUsuarioComponent},
   
    {path:'cargos', component:ListarCargoComponent},
    {path:'cargos/:id', component: DetalheCargoComponent},

    {path:'departamentos', component:ListarDepartamentoComponent},
    {path:'departamentos/:id', component: DetalheDepartamentoComponent},
 
    {path:'centros-de-custo', component:ListarCentroDeCustoComponent},
    {path:'centros-de-custo/:id', component: DetalheCentroDeCustoComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
