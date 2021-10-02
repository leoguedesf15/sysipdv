import { AuthService } from './../../../services/auth/auth-service.service';
import { DepartamentoService } from './../../../services/departamento/departamento.service';
import { Lista } from './../../../interfaces/lista';
import { Usuario } from './../../../interfaces/usuario';
import { Departamento } from './../../../interfaces/departamento';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-departamento',
  templateUrl: './detalhe-departamento.component.html',
  styleUrls: ['./detalhe-departamento.component.css']
})
export class DetalheDepartamentoComponent implements OnInit {

  title:string ='Editar Departamento';
  formulario : FormGroup;
  departamento : Departamento;
  departamentos : Lista<Usuario> ={
    title: '',
    keysToShow: ['nome'],
    dataPrimaryKey: 'id_usuario',
    actionRoute: '',
    headers: ['Funcionários'],
    data: []
  }
  exibeFormulario:boolean;
  exibeSenha = false;
  constructor(private activeRoute : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder,
              private departamentoService : DepartamentoService,
              private authService : AuthService) { }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe(__values=>{
      this.departamentoService
            .detail(__values.id)
            .subscribe(
              result=>{
             
                this.departamento = result.data[0];                
                  this.formulario = this.formBuilder.group({
                                      id_departamento:[this.departamento.id_departamento,null],
                                      nome_departamento:[this.departamento.nome_departamento, [Validators.required,Validators.maxLength(30)]],
                                      id_centro_custo_fk:[this.departamento.id_centro_custo_fk]
                                    });
                                                      
                  this.departamentos.data=result.data[0].usuarios;                                   
                  this.exibeFormulario = true; 
              },
              error=>{
                  if(error.status==401){
                    this.authService.autenticacaoUsuario(false);
                  }
              })

    })
  }

  save(form){
    let obj=JSON.parse(form);
    this.departamentoService.update(obj.id_departamento,form).subscribe(result=>{
        alert(result.message);
        this.router.navigate(['departamentos'])
    }, error=>{if(error.status == 401) this.authService.autenticacaoUsuario(false);});

  }

  
  
  isNull(value){
    if(value) return true;
    else return false;
  }
}
