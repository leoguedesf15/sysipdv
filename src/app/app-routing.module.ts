import { DetalheUsuarioComponent } from './usuario/detalhe-usuario/detalhe-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { FormLoginComponent } from './form-login/form-login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'', component:FormLoginComponent},
    {path:'usuarios', component:ListarUsuarioComponent},
    {path:'usuarios/editar', component: DetalheUsuarioComponent},
    {path: 'usuarios/{id}', component: ListarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
