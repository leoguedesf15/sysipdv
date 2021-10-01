import { Cargo } from './../../interfaces/cargo';
import { ApiResponse } from './../../interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathService } from '../global/path.service';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http : HttpClient,
              private path : PathService) { }

  getAll(){
    return this.http.get<ApiResponse<Cargo[]>>(`${this.path.get('api')}/cargo`);
  }
  detail(id){
    return this.http.get<ApiResponse<Cargo>>(`${this.path.get('api')}/cargo/${id}`);
  }
  update(id,form){    
    return this.http.put<ApiResponse<[]>>(`${this.path.get('api')}/cargo/${id}`,JSON.parse(form));
  }
  save(form){    
    return this.http.post<ApiResponse<[]>>(`${this.path.get('api')}/cargo`,form);
  }
  delete(id){
    return this.http.delete<ApiResponse<Cargo>>(`${this.path.get('api')}/cargo/${id}`);
  }
}
