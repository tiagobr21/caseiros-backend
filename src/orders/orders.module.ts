import { Module } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { OrderController } from "./orders.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Orders } from "./entities/orders.entity";
import { OrderItems } from "./entities/order-item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Orders, OrderItems])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
