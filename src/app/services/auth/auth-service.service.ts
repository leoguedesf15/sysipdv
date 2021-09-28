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
  constructor(private http: HttpClient,
              private path: PathService,
              private md5: Md5) { 
                this.usuarioAutenticadoEmitter = new EventEmitter<boolean>();

  }
  verificaToken(){
    return this.http.post<ApiResponse<void>>(`${this.path.get('api')}/validar-token`,`token=${localStorage.getItem('Authorization')}`)
  }

  autenticacaoUsuario(bool, token?){
    if(token) localStorage.setItem("Authorization",token);
    this.usuarioAutenticadoEmitter.emit(bool);
  }

  login(email,senha){
    let encryptedPassword = this.md5.appendStr(senha).end()
    return this.http.post<ApiResponse<{token:string}>>(`${this.path.get('api')}/login`,`email=${email}&senha=${encryptedPassword}`)
  }
}
