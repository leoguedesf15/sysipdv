import { ApiResponse } from './../../interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CentroDeCusto } from 'src/app/centro-de-custo';
import { PathService } from '../global/path.service';

@Injectable({
  providedIn: 'root'
})
export class CentroDeCustoService {

  constructor(private http: HttpClient,
              private path: PathService) { }
  getAll(){
    return this.http.get<ApiResponse<CentroDeCusto[]>>(`${this.path.get('api')}/centro-de-custo`);
  }
  detail(id){
    return this.http.get<ApiResponse<CentroDeCusto>>(`${this.path.get('api')}/centro-de-custo/${id}`);
  }
  update(id,form){    
    return this.http.put<ApiResponse<[]>>(`${this.path.get('api')}/centro-de-custo/${id}`,JSON.parse(form));
  }
  save(form){    
    return this.http.post<ApiResponse<[]>>(`${this.path.get('api')}/centro-de-custo`,form);
  }
  delete(id){
    return this.http.delete<ApiResponse<CentroDeCusto>>(`${this.path.get('api')}/centro-de-custo/${id}`);
  }
}
