import { Router } from '@angular/router';
import { ApiResponse } from './../../interfaces/api-response';
import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PathService } from '../global/path.service';
import { HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  usuarioAutenticadoEmitter:EventEmitter<boolean>;
  private usuarioAutenticado:boolean;
  constructor(private http: HttpClient,
              private path: PathService,
              private router : Router) { 
                this.usuarioAutenticadoEmitter = new EventEmitter<boolean>();

  }
  verificaToken(){
    return this.http.post<ApiResponse<void>>(`${this.path.get('api')}/validar-token`,{token:localStorage.getItem('Authorization')})
  }
 
  usuarioEstaAutenticado(){
    this.verificaToken().subscribe(result=>{return;},errors=>{
                                                                this.autenticacaoUsuario(false)                                                                
                                                              })
    return this.usuarioAutenticado;
  }
  autenticacaoUsuario(bool, token?){
    if(token) localStorage.setItem("Authorization",token);
    this.usuarioAutenticado = bool;
    this.usuarioAutenticadoEmitter.emit(bool);
    if(!bool){
      localStorage.removeItem("Authorization");
      this.router.navigate(['']);
    }  
      
  }

  login(email,senha){
    let md5 = new Md5();
    let encryptedPassword = md5.appendStr(senha).end()
    let body = {"email":email,"senha":encryptedPassword}
    return this.http.post<ApiResponse<{token:string}>>(`${this.path.get('api')}/login`,body)
  }
}
