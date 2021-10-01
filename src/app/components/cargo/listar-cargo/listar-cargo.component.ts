import { query } from '@angular/animations';
import { AuthService } from './../../../services/auth/auth-service.service';
import { CargoService } from './../../../services/cargo/cargo.service';
import { Router } from '@angular/router';
import { Lista } from './../../../interfaces/lista';
import { Cargo } from './../../../interfaces/cargo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cargo',
  templateUrl: './listar-cargo.component.html',
  styleUrls: ['./listar-cargo.component.css']
})
export class ListarCargoComponent implements OnInit {

  dados:Lista<Cargo>;
  exibeDados:boolean;
  exibe404:boolean;
  exibeAcoes:boolean;
  constructor(private cargoService : CargoService,
              private router : Router,
              private authService : AuthService) { 
    this.exibeDados = false;
    this.exibeAcoes = true;
  }
  
  ngOnInit(): void {  
    this.cargoService.getAll().subscribe(result=> {
      this.dados={
        title: 'Lista de Cargos',
        dataPrimaryKey:'id_cargo',
        actionRoute:'/cargos',
        keysToShow:['nome_cargo','descricao'],
        headers:['Nome','Descrição'],  
        data:result.data,
      }
        console.log(this.dados)
        this.exibeDados=true;
      },
      errors=>{
        if(errors.status == 404){
          this.exibeDados = false;
          this.exibe404 = true;
        }
        if(errors.status ==401){
          this.authService.autenticacaoUsuario(false);
        }
      }
      )
      
  }

  editar(id){
    this.router.navigate(['cargos',id])
  }
  deletar(id){
    this.cargoService.delete(id).subscribe(result=>{
      alert('Cargo '+result.data[0].nome_cargo+' removido com sucesso!') 
      this.reloadComponent();         
    }
     )
  }
  adicionar(event){
    this.router.navigate(['/criar-cargo'])
  }
  getDados(){
    return this.dados;
  }

  reloadComponent(){
  
    this.router.navigate(['fake-reload'],{queryParams: {redirect:"cargos"}});
   
  } 


}
