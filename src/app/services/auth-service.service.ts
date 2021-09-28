import { ApiResponse } from './../interfaces/api-response';
import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PathService } from './path.service';
import { HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private path: PathService,
              private md5: Md5) { 

  }
  verificaToken(){
    return this.http.post<ApiResponse>(`${this.path.get('api')}/validar-token`,`token=${localStorage.getItem('Authorization')}`,{headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')})
  }
  login(email,senha){
    let encryptedPassword = this.md5.appendStr(senha).end()
    return this.http.post<ApiResponse>(`${this.path.get('api')}/login`,`email=${email}&senha=${encryptedPassword}`,{headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')})
  }
}
