import { AuthService } from './../../services/auth/auth-service.service';
import { LogoComponent } from './../logo/logo.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoClass:string = 'navbar_logo'

  @Output('logOff') evento_logoff:EventEmitter<boolean>;
  constructor(private authService:AuthService,
              private router : Router) { 
                this.evento_logoff = new EventEmitter<boolean>();
    }

  ngOnInit(): void {
    
  }
  logoff(){
    this.authService.logoff();
    this.router.navigate(['']);
    this.evento_logoff.emit(true);
  }

}
