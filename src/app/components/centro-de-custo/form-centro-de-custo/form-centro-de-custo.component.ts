import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'form-centro-custo',
  templateUrl: './form-centro-de-custo.component.html',
  styleUrls: ['./form-centro-de-custo.component.css']
})
export class FormCentroDeCustoComponent implements OnInit {

  @Input('title') title : string;
  @Input('formCentroDeCusto') formGroup : FormGroup;  
  @Output('formSubmit') submitEvent : EventEmitter<string>;
  @Input('exibeSenha') exibeSenha : boolean;
 
  constructor() { 
                this.submitEvent = new EventEmitter<string>();
                
              }
  
  ngOnInit(): void {
    
  }
  formValido(){
    return this.formGroup.valid;
  }
  submitForm(){
    this.submitEvent.emit(JSON.stringify(this.formGroup.value));
  }

}
