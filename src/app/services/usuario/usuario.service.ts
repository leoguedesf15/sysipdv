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
  detail(id){
    return this.http.get<ApiResponse<Usuario>>(`${this.path.get('api')}/usuario/${id}`);
  }
  update(id,form){    
    return this.http.put<ApiResponse<[]>>(`${this.path.get('api')}/usuario/${id}`,JSON.parse(form));
  }
  save(form){    
    return this.http.post<ApiResponse<[]>>(`${this.path.get('api')}/usuario`,form);
  }
  delete(id){
    return this.http.delete<ApiResponse<Usuario>>(`${this.path.get('api')}/usuario/${id}`);
  }
  upload(file){
    let formData = new FormData();
    formData.append('upload', file);
    return this.http.post<ApiResponse<[]>>(`${this.path.get('api')}/upload`, formData);
  }
}
