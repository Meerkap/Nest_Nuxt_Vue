import { IsNumber, IsString } from "class-validator";

export class CreateFacturaDto {

    //Number
    @IsString()
    id: string;

    @IsString()
    identificador: string;

    @IsString({message: 'La Empresa tiene que ser un String'})
    empresa: string;

    @IsString()
    precio: string;

    @IsString()
    notas?: string;


}