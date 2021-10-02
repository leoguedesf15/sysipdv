import { AuthService } from './../../../services/auth/auth-service.service';
import { DepartamentoService } from './../../../services/departamento/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from './../../../interfaces/usuario';
import { Lista } from './../../../interfaces/lista';
import { Departamento } from './../../../interfaces/departamento';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-departamento',
  templateUrl: './criar-departamento.component.html',
  styleUrls: ['./criar-departamento.component.css']
})
export class CriarDepartamentoComponent implements OnInit {

  title:string ='Criar Departamento';
  formulario : FormGroup;
  departamento : Departamento;
  
  exibeFormulario:boolean;
  exibeSenha = false;
  constructor(private activeRoute : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder,
              private departamentoService : DepartamentoService,
              private authService : AuthService) { }

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
                          id_departamento:[null],
                          nome_departamento:[null, [Validators.required,Validators.maxLength(30)]],
                          id_centro_custo_fk:[null, [Validators.required]]
                        })                             
      this.exibeFormulario = true;               
  }

  save(form){
    let obj=JSON.parse(form);
    this.departamentoService.save(obj).subscribe(result=>{
        alert(result.message);
        this.router.navigate(['departamentos'])
    }, error=>{
      if(error.status == 401) this.authService.autenticacaoUsuario(false);
    });

  }

  
  
  isNull(value){
    if(value) return true;
    else return false;
  }
}
