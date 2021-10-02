import { AuthService } from './../../../services/auth/auth-service.service';
import { Router } from '@angular/router';
import { DepartamentoService } from './../../../services/departamento/departamento.service';
import { Departamento } from './../../../interfaces/departamento';
import { Lista } from './../../../interfaces/lista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {

  dados:Lista<Departamento>;
  exibeDados:boolean;
  exibe404:boolean;
  exibeAcoes:boolean;
  constructor(private departamentoService: DepartamentoService,
              private router : Router,
              private authService : AuthService) { 
    this.exibeDados = false
    this.exibeAcoes = true;
  }
  
  ngOnInit(): void {  
    this.departamentoService.getAll().subscribe(result=> {
      this.dados={
        title: 'Lista de Departamentos',
        dataPrimaryKey:'id_departamento',
        actionRoute:'/departamentos',
        keysToShow:['nome_departamento'],
        headers:['Nome'],  
        data:result.data,
      }
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
    this.router.navigate(['departamentos',id])
  }
  deletar(id){
    this.departamentoService.delete(id).subscribe(result=>{
      alert('Departamento '+result.data[0].nome_departamento+' removido com sucesso!') 
      this.reloadComponent();         
    },    
      errors=> alert(errors.error.message)    
     )
  }
  adicionar(event){
    this.router.navigate(['/criar-departamento'])
  }
  getDados(){
    return this.dados;
  }

  reloadComponent(){
  
    this.router.navigate(['fake-reload'],{queryParams: {redirect:"departamentos"}});
   
  } 

}
