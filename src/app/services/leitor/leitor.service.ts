import { Usuario } from './../../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeitorService {

  constructor(private http : HttpClient) { }
  read(path){
    return this.http.get<Usuario[]>(path);
  }
}
