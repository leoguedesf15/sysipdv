import { Cargo } from './../../../interfaces/cargo';
import { CargoService } from './../../../services/cargo/cargo.service';
import { Usuario } from './../../../interfaces/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import { AuthService } from './../../../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {
  title:string ='Editar Usuário';
  formulario : FormGroup;
  usuario : Usuario;
  exibeFormulario:boolean;
  exibeSenha = false;
  constructor(private activeRoute : ActivatedRoute,
              private router : Router,
              private usuarioService : UsuarioService,
              private formBuilder : FormBuilder,
              private cargoService : CargoService) { }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe(__values=>{
      this.usuarioService
            .detail(__values.id)
            .subscribe(
              result=>{               
                this.usuario = result.data[0];
                
                  this.formulario = this.formBuilder.group({
                                      id_usuario:[this.usuario.id_usuario,null],
                                      nome:[this.usuario.nome, [Validators.required,Validators.maxLength(30)]],
                                      email:[this.usuario.email,[Validators.email, Validators.required]],
                                      senha:[null,null],
                                      dtnascimento:[this.usuario.dtnascimento,[Validators.required]],
                                      cargo:[this.usuario.cargo,[Validators.required]],   
                                      id_cargo_fk:[this.usuario.id_cargo_fk,[Validators.required]],
                                      id_departamento_fk:[this.usuario.id_departamento_fk,[Validators.required]],
                                      departamento:[this.usuario.departamento,[Validators.required]]
                                    });
                  this.exibeFormulario = true; 


              })

    })
  }

  save(form){
    let obj=JSON.parse(form);
    this.usuarioService.update(obj.id_usuario,form).subscribe(result=>{
        alert(result.message);
        this.router.navigate(['usuarios'])
    }, error=>console.log(error));

  }

  
  
  isNull(value){
    if(value) return true;
    else return false;
  }

}
