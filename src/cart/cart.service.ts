import { Injectable } from "@nestjs/common";
import { DeliveryService } from "src/delivery/delivery.service";
import { ProductsService } from "src/products/products.service";

@Injectable()
export class CartService { 
    constructor(
        private readonly productsService: ProductsService,
        private readonly deliveryService: DeliveryService
    ) { }
    
    async calculateCart(cartItems: any[], neighborhood: string) {
        let subtotal = 0;

        for (const item of cartItems) {
            const product = await this.productsService.findById(item.id);
            if (product) {
                subtotal += product.price * item.quantity;
            }
        }

        const frete = await this.deliveryService.getFrete(neighborhood);
        const total = subtotal + frete;

        return { subtotal, frete, total };
    }
}