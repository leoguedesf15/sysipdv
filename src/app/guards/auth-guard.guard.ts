import { AuthService } from './../services/auth/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService,
              private router : Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let retorno;
      retorno = (this.authService.usuarioEstaAutenticado()?true:false)
      if(!retorno) this.authService.autenticacaoUsuario(false);
      return retorno;
  }

  
}
