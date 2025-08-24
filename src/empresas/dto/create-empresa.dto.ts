import { ApiProperty } from "@nestjs/swagger";

export class CreateEmpresaDto {
    @ApiProperty({default: 1})
        public id: number;
    @ApiProperty({default: "Pipe Tecnologic"})
        public nombre: String;
    @ApiProperty({default: "https://www.globant.com"})
        public sitioWeb: string;
    @ApiProperty({default: "Mediana"})
        public tipo: string;
}
