import { ApiResponse } from './../../interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from 'src/app/interfaces/departamento';
import { PathService } from '../global/path.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http : HttpClient,
              private path : PathService) { }

  getAll(){
    return this.http.get<ApiResponse<Departamento[]>>(`${this.path.get('api')}/departamento`);
  }
  detail(id){
    return this.http.get<ApiResponse<Departamento>>(`${this.path.get('api')}/departamento/${id}`);
  }
  update(id,form){    
    return this.http.put<ApiResponse<[]>>(`${this.path.get('api')}/departamento/${id}`,JSON.parse(form));
  }
  save(form){    
    return this.http.post<ApiResponse<[]>>(`${this.path.get('api')}/departamento`,form);
  }
  delete(id){
    return this.http.delete<ApiResponse<Departamento>>(`${this.path.get('api')}/departamento/${id}`);
  }
}
