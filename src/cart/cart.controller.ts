
import { Controller, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('calculate')
  async calculate(@Body() body: any) {
    const { items, bairro } = body;
    return await this.cartService.calculateCart(items, bairro);
  }
}