import { AppComponent } from './../../../app.component';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Usuario } from './../../../interfaces/usuario';
import { Lista } from './../../../interfaces/lista';
import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  dados:Lista<Usuario>;
  exibeDados:boolean;
  constructor(private usuarioService : UsuarioService) { 
    this.exibeDados = false
  }
  
  ngOnInit(): void {  
    this.usuarioService.get().subscribe(result=> {
      this.dados={
        dataPrimaryKey:'id_usuario',
        actionRoute:'/usuarios',
        keysToShow:['nome','email', 'dtnascimento'],
        headers:['Nome','Email','Nascimento'],  
        data:result.data,
      }
        console.log(this.dados)
        this.exibeDados=true;
      }
      )
      
  }

  editar(id){
    alert('editar '+id);
  }
  deletar(id){
    alert('deletar '+id);
  }
  adicionar(event){
    alert('adicionar')
  }
  getDados(){
    return this.dados;
  }

}
