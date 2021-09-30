import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptou')
    const token = localStorage.getItem("Authorization"); // you probably want to store it in localStorage or something
    

    const req1 = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization' : 'Bearer '+token        
    })
    })      

    return next.handle(req1);
  }

}