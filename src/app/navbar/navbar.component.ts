import { LogoComponent } from './../logo/logo.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoClass:string = 'navbar_logo'

  constructor() { }

  ngOnInit(): void {
    
  }

}
