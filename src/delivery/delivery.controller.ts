import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { DeliveryService } from "./delivery.service";
import { DeliveryZone } from "./entities/delivery-zone.entity";

@Controller('delivery')

export class DeliveryController { 
    constructor(private readonly deliveryService: DeliveryService) {}

    @Get('zones')
    findAll() {
        return this.deliveryService.findAll();
    }

    @Post('zones')
    createZone(@Body() zoneData: DeliveryZone) {
        return this.deliveryService.createZone(zoneData);
    }    

    @Put('zones/:id')
    updateZone( @Body() zoneData: DeliveryZone , @Param('id') id: number) {
        return this.deliveryService.updateZone(zoneData, id );
    }

    @Delete('zones/:id')
    deleteZone(@Param('id') id: number) {
        return this.deliveryService.deleteZone(id);
    }
      
    @Get('calculate/:neighborhood')
    async calculate(@Param('neighborhood') neighborhood: string) {
        const freight = await this.deliveryService.getFrete(neighborhood);
        return { neighborhood, freight };
    }
}