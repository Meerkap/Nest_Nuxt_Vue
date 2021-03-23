
import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateFacturaDto } from './create-factura.dto';

export class EditFacturaDto extends PartialType(CreateFacturaDto) {}

/*
export class EditFacturaDto extends PartialType(CreateFacturaDto) {}
*/

/*
Omite esta columna
export class EditFacturaDto extends PartialType(
    OmitType( CreateFacturaDto, ["notas"] as const)
) {}
*/