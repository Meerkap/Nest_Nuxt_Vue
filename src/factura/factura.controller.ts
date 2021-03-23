import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFacturaDto } from './dtos/create-factura.dto';
import { EditFacturaDto } from './dtos/edit-factura.dto';
import { FacturaService } from './factura.service';

@ApiTags('Facturas')
@Controller('factura')
export class FacturaController {

    constructor(private readonly facturaService: FacturaService) { }

    @Get()
    async getMany() {
        const data = await this.facturaService.getMany()
        return {
            message: 'Peticion correcta',
            data
        }
    }

    @Get("/all")
    async getCount( ) {
        const data = await this.facturaService.getCount()
        return {
            data
        }
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.facturaService.getOne(id);
    }

    @Post()
    async createOne(@Body() dto: CreateFacturaDto) {
        const data = await this.facturaService.createOne(dto);
        return { message: 'Factura creada', data };
    }

    //1:34
    @Put(':id')
    editOne(
        @Param('id') id: number,
        @Body() dto: EditFacturaDto
    ) {
        return this.facturaService.editOne(id, dto);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.facturaService.deleteOne(id);
        return { message: 'Post eliminado', data };
    }

}


/**
 @Post()
    createOne(
        @Body('title') title: any,
    ) {
        console.log(title);
    }
 */

/**

export class FacturaController {

    constructor( private readonly facturaService: FacturaService ) { }

    @Get()
    getMany() {
        return this.facturaService.getMany();
    }


    //http://localhost:3001/post/15135
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: string) {
        return this.facturaService.getOne(id);
        //console.log(id);
        //return {
            //message: 'getOne'
        };
    }

    @Post()
    createOne(
        @Body() dto: CreateFacturaDto
    ) {
        console.log(dto.identificador);
        return dto;
    }

    //1:34
    @Put(':id')
    editOne(
        @Param('id') id: string,
        @Body() dto: EditFacturaDto
    ) {
        return dto;
    }

    @Delete()
    deleteOne(@Param('id') id: string) { }


}

 */