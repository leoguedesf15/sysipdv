import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  @Input('title') title : string;
  @Input('form-usuario') form : FormGroup;
  constructor() { }
  
  ngOnInit(): void {
    
  }
  formValido(){
    return true;
  }
  submitForm(){

  }
  seePassword(self,target:HTMLInputElement){
    if(self.classList.contains('active')){
      target.type = "password";
    }else{
      target.type = "text";
    }
    self.classList.toggle('active');
  }
}
