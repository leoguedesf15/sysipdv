import { AuthService } from './../../../services/auth/auth-service.service';
import { CargoService } from 'src/app/services/cargo/cargo.service';
import { Cargo } from './../../../interfaces/cargo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-cargo',
  templateUrl: './criar-cargo.component.html',
  styleUrls: ['./criar-cargo.component.css']
})
export class CriarCargoComponent implements OnInit {
  title:string ='Criar Cargo';
  formulario : FormGroup;
  cargo : Cargo;
  exibeFormulario:boolean;
  exibeSenha = false;
  constructor(private activeRoute : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder,
              private cargoService : CargoService,
              private authService : AuthService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
                        nome_cargo:[null, [Validators.required,Validators.maxLength(30)]],
                        descricao:[null,[Validators.maxLength(30), Validators.required]],
                      });
    this.exibeFormulario = true; 
  }

  save(form){
    let obj=JSON.parse(form);
    this.cargoService.save(obj).subscribe(result=>{
        alert(result.message);
        this.router.navigate(['cargos'])
    }, error=>{
      if(error.status==401){
        this.authService.autenticacaoUsuario(false)
      }
    });

  }

  
  
  isNull(value){
    if(value) return true;
    else return false;
  }

}
