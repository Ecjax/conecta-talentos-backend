import { ApiProperty } from "@nestjs/swagger";
import { Empresa } from "src/empresas/entities/empresa.entity";

export class CreateOfertasLaboraleDto {
    @ApiProperty({})
    public fechaCreacion: Date;
    @ApiProperty({})
    public descripcion: string;
    @ApiProperty({})
    public cargo: string;
    @ApiProperty({})
    public region: string;
    @ApiProperty({})
    public tipo: string;
    @ApiProperty({})
    public estado: string;
    @ApiProperty({})
    public empresa: Empresa;
    @ApiProperty({})
    public postulaciones: string[];    
}
    
