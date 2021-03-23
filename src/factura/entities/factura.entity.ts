import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('factura')
export class Factura {

    //? Is Optional !Is Required

    @PrimaryGeneratedColumn()
    idfactura?: number;

    @Column( {type: 'varchar', length: 45} )
    identificador!: string;

    @Column( {type: 'varchar', length: 45} )
    empresa: string;

    @Column( {type: 'double'} )
    precio: number;

    @Column( {type: 'varchar', length: 255, nullable: true} )
    notas: string;
    
}