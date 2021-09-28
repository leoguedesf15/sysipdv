import { ListarUsuarioComponent } from './../usuario/listar-usuario/listar-usuario.component';
import { Lista } from './../../interfaces/lista';
import { Component, Input, OnInit, Output, AfterViewInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  @Input('dados') dados:Lista<any>;
  rows:string[];
  headers:string[];
  pipes:string[];
  keys:string[];
  pk:string;
  @Output('cliqueEdita') cliqueEdita:EventEmitter<string>;
  @Output('cliqueDeleta') cliqueDeleta:EventEmitter<string>;
  constructor() { 
    this.cliqueEdita = new EventEmitter<string>();
    this.cliqueDeleta = new EventEmitter<string>();
    
  }
  ngOnInit(): void {
    console.log('console lista component')
    this.headers = this.dados.headers;

    this.keys = this.dados.keysToShow;
    this.rows = this.dados.data;
    this.pk = this.dados.dataPrimaryKey;
    
    console.log('elementos')
    // console.log(elements);
    this.headers = this.dados.headers;
  }

  actionEdita(id){
    this.cliqueEdita.emit(id);
  }
  actionDeleta(id){
    this.cliqueDeleta.emit(id);
  }
}

