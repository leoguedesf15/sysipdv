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
              private paths : PathService) { }

  getAll(){
    return this.http.get<ApiResponse<Cargo[]>>(`${this.paths.get('api')}/cargo`);
  }
}
