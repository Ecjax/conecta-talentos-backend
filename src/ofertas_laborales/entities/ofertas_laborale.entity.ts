import { Empresa } from "src/empresas/entities/empresa.entity";

export class OfertasLaborales {
    public id: number;
    public fechaCreacion: Date;
    public descripcion: string;
    public cargo: string;
    public region: string;
    public tipo: string;
    public estado: string;
    public empresa: Empresa;
    public postulaciones: string[];    
}
