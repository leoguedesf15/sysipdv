import { AuthService } from './../../../services/auth/auth-service.service';
import { CargoService } from 'src/app/services/cargo/cargo.service';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Cargo } from './../../../interfaces/cargo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-cargo',
  templateUrl: './detalhe-cargo.component.html',
  styleUrls: ['./detalhe-cargo.component.css']
})
export class DetalheCargoComponent implements OnInit {
  title:string ='Editar Cargo';
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
    
    this.activeRoute.params.subscribe(__values=>{
      this.cargoService
            .detail(__values.id)
            .subscribe(
              result=>{               
                this.cargo = result.data[0];                
                  this.formulario = this.formBuilder.group({
                                      id_cargo:[this.cargo.id_cargo,null],
                                      nome_cargo:[this.cargo.nome_cargo, [Validators.required,Validators.maxLength(30)]],
                                      descricao:[this.cargo.descricao,[Validators.maxLength(30), Validators.required]],
                                    });
                  this.exibeFormulario = true; 
              })

    })
  }

  save(form){
    let obj=JSON.parse(form);
    this.cargoService.update(obj.id_cargo,form).subscribe(result=>{
        alert(result.message);
        this.router.navigate(['cargos'])
    }, error=>{if(error.status == 401) this.authService.autenticacaoUsuario(false);});

  }

  
  
  isNull(value){
    if(value) return true;
    else return false;
  }

}
