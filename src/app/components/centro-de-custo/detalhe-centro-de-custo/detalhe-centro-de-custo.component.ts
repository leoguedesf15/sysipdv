import { Departamento } from './../../../interfaces/departamento';
import { Lista } from './../../../interfaces/lista';
import { AuthService } from './../../../services/auth/auth-service.service';
import { CentroDeCustoService } from './../../../services/centro-de-custo/centro-de-custo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CentroDeCusto } from 'src/app/centro-de-custo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-centro-de-custo',
  templateUrl: './detalhe-centro-de-custo.component.html',
  styleUrls: ['./detalhe-centro-de-custo.component.css']
})
export class DetalheCentroDeCustoComponent implements OnInit {

  title:string ='Editar Centro de Custo';
  formulario : FormGroup;
  centroCusto : CentroDeCusto;
  departamentos : Lista<Departamento> ={
    title: '',
    keysToShow: ['nome_departamento'],
    dataPrimaryKey: 'id_departamento',
    actionRoute: '',
    headers: ['Departamentos'],
    data: []
  }
  exibeFormulario:boolean;
  exibeSenha = false;
  constructor(private activeRoute : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder,
              private centroCustoService : CentroDeCustoService,
              private authService : AuthService) { }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe(__values=>{
      this.centroCustoService
            .detail(__values.id)
            .subscribe(
              result=>{
             
                this.centroCusto = result.data[0];                
                  this.formulario = this.formBuilder.group({
                                      id_centro_custo:[this.centroCusto.id_centro_custo,null],
                                      nome_centro_custo:[this.centroCusto.nome_centro_custo, [Validators.required,Validators.maxLength(30)]],
                                    });
                                                      
                  this.departamentos.data=result.data[0].departamentos;                                   
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
    this.centroCustoService.update(obj.id_centro_custo,form).subscribe(result=>{
        alert(result.message);
        this.router.navigate(['centros-de-custo'])
    }, error=>{
      if(error.status == 401) this.authService.autenticacaoUsuario(false);
    });

  }

  
  
  isNull(value){
    if(value) return true;
    else return false;
  }
}
