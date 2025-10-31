import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliveryZone } from './entities/delivery-zone.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DeliveryZone])],
    controllers: [DeliveryController],
    providers: [DeliveryService],
    exports: [DeliveryService]
})
export class DeliveryModule {}