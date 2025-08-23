import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudianteDto {
    @ApiProperty({ default: "Elena"})
        public nombre: string;
    @ApiProperty({ default: "Jimenez"})
        public apellidos: string;
    @ApiProperty({ default: 46})
        public edad: number;
    @ApiProperty({ default: "Contador Publico"})
        public profesion: string;
    @ApiProperty({ default: "jimenezelena15@gmail.com"})
        public email: string;
}
