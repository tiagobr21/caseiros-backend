import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";

@Controller("orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {

    const order = await this.orderService.createOrder(dto);

    return {
      message: "Pedido criado com sucesso!",
      order,
    };
  }

  @Get()
  async list() {
    return this.orderService.findAll();
  }

  @Get(":id")
  async find(@Param("id") id: number) {
    return this.orderService.findOne(id);
  }

  // simulação — depois você integra com sua tabela DELIVERY_ZONES
  private async getDeliveryPrice(bairro: string): Promise<number> {
    const zonas = {
      Centro: 5,
      Jupira: 7,
      Iate: 8,
    };

    return zonas[bairro] ?? 0;
  }
}
