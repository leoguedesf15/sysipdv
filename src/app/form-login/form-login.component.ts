import { AfterViewInit, Component, EventEmitter, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';


@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit,AfterViewInit {

  @Input('email')email:any="";
  @Input('senha')senha:any='';
  constructor() { 
  }
  
  
  ngOnInit(): void {
 
  }
  ngAfterViewInit():void{

  }
  login(){
    console.log(this);
  }

}
