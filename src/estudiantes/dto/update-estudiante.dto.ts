import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEstudianteDto } from './create-estudiante.dto';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {

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
