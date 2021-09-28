import { AuthService } from './services/auth/auth-service.service';
import { Component, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SYS-IPdv';
  mostrarMenuFlag!:boolean;
  constructor(private authService:AuthService,
    private route : Router){
  }


  ngOnInit(){    
    this.authService.usuarioAutenticadoEmitter.subscribe(value=>this.mostrarMenuFlag = value);
    this.authService.verificaToken().subscribe(response=>{
      this.authService.autenticacaoUsuario(true);
      this.mostrarMenu();
      this.route.navigate(['/usuarios']);
    },error=>{
      this.authService.autenticacaoUsuario(false);
      this.esconderMenu();
      this.route.navigate(['']);
    } )
  }
  mostrarMenu(){
    this.mostrarMenuFlag=true;
  }
  esconderMenu(){
    this.mostrarMenuFlag=false;
  }

  
  
}
