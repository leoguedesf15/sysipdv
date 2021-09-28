import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  private paths={
    "api": "http://localhost/crud_ipdv/public/index.php"
  }
  constructor() { }

  get(key){
    return this.paths[key];
  }  
}
