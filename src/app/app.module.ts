import { Md5 } from 'ts-md5';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { LogoComponent } from './logo/logo.component';
import { AuthService } from './services/auth-service.service';
import { PathService } from './services/path.service';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { DetalheUsuarioComponent } from './usuario/detalhe-usuario/detalhe-usuario.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,    
    LogoComponent, 
    ListarUsuarioComponent,  
    DetalheUsuarioComponent
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
    AuthService,
    PathService,
    Md5
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
