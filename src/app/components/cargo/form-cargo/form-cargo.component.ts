import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'form-cargo',
  templateUrl: './form-cargo.component.html',
  styleUrls: ['./form-cargo.component.css']
})
export class FormCargoComponent implements OnInit {
  @Input('title') title : string;
  @Input('formCargo') formGroup : FormGroup;  
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
