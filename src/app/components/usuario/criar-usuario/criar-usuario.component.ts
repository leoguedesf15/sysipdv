import { AuthService } from './../../../services/auth/auth-service.service';
import { CargoService } from './../../../services/cargo/cargo.service';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Usuario } from './../../../interfaces/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {
  title:string ='Criar Usuário';
  formulario : FormGroup;
  usuario : Usuario;
  exibeFormulario:boolean;
  exibeSenha = true;
  constructor(private router : Router,
              private usuarioService : UsuarioService,
              private formBuilder : FormBuilder,
              private authService : AuthService) { }

  ngOnInit(): void {     
    this.formulario = this.formBuilder.group({
                          id_usuario:[null],
                          nome:[null, [Validators.required,Validators.maxLength(30)]],
                          email:[null,[Validators.email, Validators.required]],
                          senha:[null,null],
                          dtnascimento:[null,[Validators.required]],
                          cargo:[null],   
                          id_cargo_fk:[null,[Validators.required]],
                          id_departamento_fk:[null,[Validators.required]],
                          departamento:[null]
                      });
    this.exibeFormulario = true; 
  }

  save(form){
    let obj=JSON.parse(form);
    this.usuarioService.save(obj).subscribe(result=>{
        alert(result.message);
        this.router.navigate(['usuarios'])
    }, error=>{if(error.status == 401) this.authService.autenticacaoUsuario(false);});

  }

  
  
  isNull(value){
    if(value) return true;
    else return false;
  }
}
