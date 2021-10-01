import { CentroDeCustoService } from './../../../services/centro-de-custo/centro-de-custo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CentroDeCusto } from 'src/app/centro-de-custo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-centro-de-custo',
  templateUrl: './criar-centro-de-custo.component.html',
  styleUrls: ['./criar-centro-de-custo.component.css']
})
export class CriarCentroDeCustoComponent implements OnInit {
  title:string ='Criar Centro de Custo';
  formulario : FormGroup;
  centroCusto : CentroDeCusto;
  exibeFormulario:boolean;
  exibeSenha = false;
  constructor(private activeRoute : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder,
              private centroCustoService : CentroDeCustoService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
                        id_centro_custo:[null,null],
                        nome_centro_custo:[null, [Validators.required,Validators.maxLength(30)]],
                      });
    this.exibeFormulario = true; 
  }

  save(form){
    let obj=JSON.parse(form);
    this.centroCustoService.save(obj).subscribe(result=>{
        alert(result.message);
        this.router.navigate(['centros-de-custo'])
    }, error=>console.log(error));

  }

  
  
  isNull(value){
    if(value) return true;
    else return false;
  }
}
