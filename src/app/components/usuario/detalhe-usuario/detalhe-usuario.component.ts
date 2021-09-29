import { Usuario } from './../../../interfaces/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import { AuthService } from './../../../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private activeRoute : ActivatedRoute,
              private usuarioService : UsuarioService,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe(__values=>{
      this.usuarioService
            .detail(__values.id)
            .subscribe(
              result=>{               
                this.usuario = result.data[0];
                this.formulario = this.formBuilder
                                        .group({
                                            nome:[this.usuario.nome, [Validators.required,Validators.maxLength(30)]],
                                            email:[this.usuario.email,[Validators.email, Validators.required]],
                                            senha:[this.usuario.senha,[Validators.required]],
                                            dtnascimento:[this.usuario.dtnascimento,[Validators.required]],
                                            cargo:[this.usuario.cargo,[Validators.required]],
                                            departamento:[this.usuario.departamento,[Validators.required]]                                         
                                        });
                this.exibeFormulario = true;

              })

    })
  }

}
