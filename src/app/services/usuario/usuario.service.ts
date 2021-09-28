import { Usuario } from './../../interfaces/usuario';
import { ApiResponse } from './../../interfaces/api-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathService } from '../global/path.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient,
              private path : PathService) { }
  get(){
    return this.http.get<ApiResponse<Usuario[]>>(`${this.path.get('api')}/usuario`);
  }
}
