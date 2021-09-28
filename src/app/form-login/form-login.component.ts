import { ApiResponse } from './../interfaces/api-response';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit,AfterViewInit {

  formulario:FormGroup;
  logoClass:string ='logo';

constructor(private authService: AuthService,
            private formBuilder : FormBuilder,
            private router : Router) {
}
  
  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   email : new FormControl(null),
    //   password : new FormControl(null)
    // });
    this.formulario = this.formBuilder.group({
      email : [null, [Validators.email, Validators.required]],
      password: [null,[Validators.required]],
     
    });
    console.log(this.formulario);
  }
  formValido(){
    return this.formulario.get('email').valid && this.formulario.get("password").valid;
  }
  ngAfterViewInit():void{

  }

  submitForm(){
    console.log(this.formulario.get('email'));    
    this.authService.login( this.formulario.get('email').value,this.formulario.get('password').value).subscribe(result=>{
      localStorage.setItem("Authorization",result.data.token);
      this.router.navigate(['/usuarios']);
    })
  }
}
