import { BodyTransformerInterceptor } from './interceptors/body-transformer.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { Md5 } from 'ts-md5';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthService } from './services/auth/auth-service.service';
import { PathService } from './services/global/path.service';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhe-usuario/detalhe-usuario.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarCargoComponent } from './components/cargo/listar-cargo/listar-cargo.component';
import { DetalheCargoComponent } from './components/cargo/detalhe-cargo/detalhe-cargo.component';
import { ListarDepartamentoComponent } from './components/departamento/listar-departamento/listar-departamento.component';
import { DetalheDepartamentoComponent } from './components/departamento/detalhe-departamento/detalhe-departamento.component';
import { ListarCentroDeCustoComponent } from './components/centro-de-custo/listar-centro-de-custo/listar-centro-de-custo.component';
import { DetalheCentroDeCustoComponent } from './components/centro-de-custo/detalhe-centro-de-custo/detalhe-centro-de-custo.component';
import { ListaComponent } from './components/lista/lista.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { FormUsuarioComponent } from './components/usuario/form-usuario/form-usuario.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CriarUsuarioComponent } from './components/usuario/criar-usuario/criar-usuario.component';
import { FormCargoComponent } from './components/cargo/form-cargo/form-cargo.component';
import { ReloadComponent } from './components/reload/reload.component';
import { CriarCargoComponent } from './components/cargo/criar-cargo/criar-cargo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,    
    LogoComponent, 
    ListarUsuarioComponent,  
    DetalheUsuarioComponent, 
    NavbarComponent, 
    ListarCargoComponent, 
    DetalheCargoComponent, 
    ListarDepartamentoComponent, 
    DetalheDepartamentoComponent, 
    ListarCentroDeCustoComponent, 
    DetalheCentroDeCustoComponent, 
    ListaComponent, 
    AddButtonComponent, 
    FormUsuarioComponent, NotFoundPageComponent, CriarUsuarioComponent, FormCargoComponent, ReloadComponent, CriarCargoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BodyTransformerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    
    AuthService,
    PathService,
    Md5
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
