import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Orders } from "./entities/orders.entity";
import { OrderItems } from "./entities/order-item.entity";
import { CreateOrderDto } from "./dto/create-order.dto";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders)
    private orderRepo: Repository<Orders>,

    @InjectRepository(OrderItems)
    private itemRepo: Repository<OrderItems>
  ) {}

  async createOrder(dto: CreateOrderDto) {

      const order = this.orderRepo.create({
        customer_name: dto.customer_name,
        customer_phone: dto.customer_phone,
        address: dto.address,
        neighborhood: dto.neighborhood,
        subtotal:dto.subtotal,
        delivery_price: dto.delivery_price,
        total: dto.total,
      });

      const responseorder = await this.orderRepo.save(order);

      dto.items.map( async (i)  =>{

       const orderItems = this.itemRepo.create({
           order: responseorder,
           product_id: i.product_id,
           quantity: i.quantity,
           unit_price: i.unit_price
        })

        await this.itemRepo.save(orderItems);
      })
  }

  async findAll() {
    return await this.orderRepo.find({
      relations: ["items"],
      order: { id: "DESC" }
    });
  }

  async findOne(id: number) {
    return await this.orderRepo.findOne({
      where: { id },
      relations: ["items"],
    });
  }
}
