import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFacturaDto } from './dtos/create-factura.dto';
import { EditFacturaDto } from './dtos/edit-factura.dto';
import { Factura } from './entities/factura.entity';

@Injectable()
export class FacturaService {

    constructor(
        @InjectRepository(Factura)
        private readonly facturaRepository: Repository<Factura>
    ) { }

    async getMany(): Promise<Factura[]> {
        return await this.facturaRepository.find()
    }


    async getCount() {
        //return await this.facturaRepository.findAndCount( dto.precio as any )
        const precioSum = await this.facturaRepository
            .createQueryBuilder()
            .select("SUM(factura.precio)", "totalPrecio")
            .getRawOne();
        return precioSum;
    }

    async getOne(id: number) {
        const factura = await this.facturaRepository.findOne(id)
        if (!factura) throw new NotFoundException()
        return factura
    }

    async createOne(dto: CreateFacturaDto) {
        const factura = this.facturaRepository.create(dto as any);
        return await this.facturaRepository.save(factura)
    }

    async editOne(id: number, dto: EditFacturaDto) {
        const factura = await this.facturaRepository.findOne(id);

        if (!factura) throw new NotFoundException('Factura no enontrada2!');

        const facturaEditada = Object.assign(factura, dto);
        return await this.facturaRepository.save(facturaEditada);
    }

    async deleteOne(id: number) {
        return await this.facturaRepository.delete(id);
    }

}
