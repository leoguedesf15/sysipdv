import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SYS-IPdv';
  
  @ViewChild('login_container')login_container!:HTMLElement;
  constructor(){
  }

  
  
}
