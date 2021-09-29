import { Departamento } from './departamento';
import { Cargo } from './cargo';
export interface Usuario {
    id_usuario:string,
    nome:string,
    email:string,
    senha:string,
    dtnascimento:Date,    
    id_cargo_fk:string,
    id_departamento_fk:string,
    cargo?:Cargo,
    departamento?: Departamento
}
