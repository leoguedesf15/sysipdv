import { AuthService } from './../../../services/auth/auth-service.service';
import { Router } from '@angular/router';
import { CentroDeCustoService } from './../../../services/centro-de-custo/centro-de-custo.service';
import { CentroDeCusto } from './../../../centro-de-custo';
import { Lista } from './../../../interfaces/lista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-centro-de-custo',
  templateUrl: './listar-centro-de-custo.component.html',
  styleUrls: ['./listar-centro-de-custo.component.css']
})
export class ListarCentroDeCustoComponent implements OnInit {

  dados:Lista<CentroDeCusto>;
  exibeDados:boolean;
  exibe404:boolean;
  exibeAcoes:boolean;
  constructor(private centroDeCustoService: CentroDeCustoService,
              private router : Router,
              private authService : AuthService) { 
    this.exibeDados = false
    this.exibeAcoes = true;
  }
  
  ngOnInit(): void {  
    this.centroDeCustoService.getAll().subscribe(result=> {
      this.dados={
        title: 'Lista de Centros de Custo',
        dataPrimaryKey:'id_centro_custo',
        actionRoute:'/centros-de-custo',
        keysToShow:['nome_centro_custo'],
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
    this.router.navigate(['centros-de-custo',id])
  }
  deletar(id){
    this.centroDeCustoService.delete(id).subscribe(result=>{
      alert('Centro de custo '+result.data[0].nome_centro_custo+' removido com sucesso!') 
      this.reloadComponent();         
    },
    
      errors=> alert(errors.error.message)
    
     )
  }
  adicionar(event){
    this.router.navigate(['/criar-centro-de-custo'])
  }
  getDados(){
    return this.dados;
  }

  reloadComponent(){
  
    this.router.navigate(['fake-reload'],{queryParams: {redirect:"centros-de-custo"}});
   
  } 


}
