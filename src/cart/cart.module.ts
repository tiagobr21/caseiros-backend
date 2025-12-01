import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { ProductsModule } from '../products/products.module';
import { DeliveryModule } from '../delivery/delivery.module';

@Module({
  imports: [ProductsModule, DeliveryModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}