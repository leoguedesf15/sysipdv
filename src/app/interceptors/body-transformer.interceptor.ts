import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BodyTransformerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let obj=request.body


    let body = new URLSearchParams();
    if(request.url.toString().indexOf('upload')==-1){
      if(obj){
        Object.keys(obj).forEach((key)=>{
         
            body.set(key,obj[key]);
          
        });
      }
  
      const req1 = request.clone({
        body: body.toString()
      })   
      
      
      
      
      return next.handle(req1);
    }
    return next.handle(request);
  }
}
