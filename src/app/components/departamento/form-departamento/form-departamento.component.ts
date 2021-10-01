import { CentroDeCustoService } from './../../../services/centro-de-custo/centro-de-custo.service';
import { CentroDeCusto } from './../../../centro-de-custo';
import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'form-departamento',
  templateUrl: './form-departamento.component.html',
  styleUrls: ['./form-departamento.component.css']
})
export class FormDepartamentoComponent implements OnInit {

  @Input('title') title : string;
  @Input('formDepartamento') formGroup : FormGroup;  
  @Output('formSubmit') submitEvent : EventEmitter<string>;
  @Input('exibeSenha') exibeSenha : boolean;
  centros_custo : CentroDeCusto[];
  constructor(private centroDeCustoService : CentroDeCustoService) { 
                this.submitEvent = new EventEmitter<string>();                
              }
  
  ngOnInit(): void {
    this.centroDeCustoService.getAll().subscribe(result=> this.centros_custo = result.data);
  }
  formValido(){
    return this.formGroup.valid;
  }
  submitForm(){
    this.submitEvent.emit(JSON.stringify(this.formGroup.value));
  }
}
