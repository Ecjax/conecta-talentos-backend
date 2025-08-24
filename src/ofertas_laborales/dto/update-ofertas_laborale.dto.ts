import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOfertasLaboraleDto } from './create-ofertas_laborale.dto';
import { Empresa } from 'src/empresas/entities/empresa.entity';

export class UpdateOfertasLaboraleDto extends PartialType(CreateOfertasLaboraleDto) {
    @ApiProperty({})
    public estado: string;
}
