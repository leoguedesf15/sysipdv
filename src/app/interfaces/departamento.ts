import { CentroDeCusto } from './../centro-de-custo';
export interface Departamento {
    id_departamento:string,
    nome_departamento:string,
    id_centro_custo_fk:string,
    'centro-de-custo'?:CentroDeCusto,
}
