import { Controller, Get, Param, Query } from "@nestjs/common";
import { DeliveryService } from "./delivery.service";


@Controller('delivery')

export class DeliveryController { 
    constructor(private readonly deliveryService: DeliveryService) {}

    @Get('zones')
    findAll() {
        return this.deliveryService.findAll();
    }

    @Get('calculate/:neighborhood')
    async calculate(@Param('neighborhood') neighborhood: string) {
        const freight = await this.deliveryService.getFrete(neighborhood);
        return { neighborhood, freight };
    }
}