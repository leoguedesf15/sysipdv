import { Usuario } from './../../../interfaces/usuario';
import { DepartamentoService } from './../../../services/departamento/departamento.service';
import { Departamento } from './../../../interfaces/departamento';
import { CargoService } from './../../../services/cargo/cargo.service';
import { Cargo } from './../../../interfaces/cargo';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit,AfterViewInit {
  @Input('title') title : string;
  @Input('formUsuario') formGroup : FormGroup;  
  @Output('formSubmit') submitEvent : EventEmitter<string>;
  @Input('exibeSenha') exibeSenha : boolean;
  cargos:Cargo[];
  departamentos : Departamento[];
  constructor(private cargoService : CargoService,
              private departamentoService : DepartamentoService) { 
                this.submitEvent = new EventEmitter<string>();
                
              }
  
  ngOnInit(): void {
    this.cargoService.getAll().subscribe(result=>{
      this.cargos = result.data;
    })
    this.departamentoService.getAll().subscribe(result=>{
      this.departamentos = result.data;
    })    
  }
  formValido(){
    return this.formGroup.valid;
  }
  submitForm(){
    this.submitEvent.emit(JSON.stringify(this.formGroup.value));
  }
  ngAfterViewInit(){
    if(!this.exibeSenha){
      this.formGroup.get('senha').disable();
    }
  }

  seePassword(self,target:HTMLInputElement){
    if(self.classList.contains('active')){
      target.type = "password";
    }else{
      target.type = "text";
    }
    self.classList.toggle('active');
  }
}
