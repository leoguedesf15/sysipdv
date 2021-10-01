import { CriarCargoComponent } from './components/cargo/criar-cargo/criar-cargo.component';
import { ReloadComponent } from './components/reload/reload.component';
import { CriarUsuarioComponent } from './components/usuario/criar-usuario/criar-usuario.component';
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
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
    {path:'', component:FormLoginComponent},
    
    {path:'usuarios', component:ListarUsuarioComponent, canActivate:[AuthGuard]},
    {path:'usuarios/:id', component: DetalheUsuarioComponent, canActivate:[AuthGuard]},
    {path:'criar-usuario', component: CriarUsuarioComponent, canActivate:[AuthGuard]},
    
    {path:'cargos', component:ListarCargoComponent, canActivate:[AuthGuard]},
    {path:'cargos/:id', component: DetalheCargoComponent, canActivate:[AuthGuard]},
    {path:'criar-cargo', component: CriarCargoComponent, canActivate:[AuthGuard]},

    {path:'departamentos', component:ListarDepartamentoComponent, canActivate:[AuthGuard]},
    {path:'departamentos/:id', component: DetalheDepartamentoComponent, canActivate:[AuthGuard]},
 
    {path:'centros-de-custo', component:ListarCentroDeCustoComponent, canActivate:[AuthGuard]},
    {path:'centros-de-custo/:id', component: DetalheCentroDeCustoComponent, canActivate:[AuthGuard]}, 

    {path:'fake-reload', component:ReloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
