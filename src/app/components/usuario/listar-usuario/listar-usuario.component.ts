import { Router } from '@angular/router';
import { AppComponent } from './../../../app.component';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Usuario } from './../../../interfaces/usuario';
import { Lista } from './../../../interfaces/lista';
import { Component, OnInit, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { query } from '@angular/animations';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  dados:Lista<Usuario>;
  exibeDados:boolean;
  exibe404:boolean;
  
  constructor(private usuarioService : UsuarioService,
              private router : Router,
              private changeDetectorRef: ChangeDetectorRef) { 
    this.exibeDados = false
  }
  
  ngOnInit(): void {  
    this.usuarioService.get().subscribe(result=> {
      this.dados={
        title: 'Lista de Usuários',
        dataPrimaryKey:'id_usuario',
        actionRoute:'/usuarios',
        keysToShow:['nome','email', 'dtnascimento'],
        headers:['Nome','Email','Nascimento'],  
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
      }
      )
      
  }

  editar(id){
    this.router.navigate(['usuarios',id])
  }
  deletar(id){
    this.usuarioService.delete(id).subscribe(result=>{
      alert('Dados do usuário '+result.data[0].nome+' removidos com sucesso!') 
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
    this.router.navigate(['fake-reload'],{queryParams: {redirect:"usuarios"}});
   
  } 


}
