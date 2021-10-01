import { AuthService } from './../services/auth/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let auth = (localStorage.getItem("Authorization"));
      let retorno;
      if(auth){
        retorno = true;
        this.authService.autenticacaoUsuario(true);
      }else{
        retorno = false;
        this.authService.autenticacaoUsuario(false);
      }         
      return retorno;
  }

  
}
