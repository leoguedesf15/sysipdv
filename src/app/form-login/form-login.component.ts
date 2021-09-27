import { AfterViewInit, Component, EventEmitter, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';


@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit,AfterViewInit {

email!:string;
pass!:string;
constructor() { 
  }
  
  setEmail(target:any){
    this.email = target.value;
  }
  setPass(target:any){
    this.pass = target.value;
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit():void{

  }
  login(){
    console.log(this);
  }

}
