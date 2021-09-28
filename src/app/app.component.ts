import { AuthService } from './services/auth-service.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SYS-IPdv';
  mostrarMenuFlag!:boolean;
  @ViewChild('login_container')login_container!:HTMLElement;
  constructor(private authService:AuthService,
              private route : Router){ }

  mostrarMenu(){
    
  }

  ngOnInit(){
    console.log(this.route.routerState.snapshot.url);
    this.authService.verificaToken().subscribe(response=>{
      this.route.navigate(['/usuarios']);
    },error=>{
    } )
  }

  
  
}
