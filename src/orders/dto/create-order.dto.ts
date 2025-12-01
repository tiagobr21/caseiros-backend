export class CreateOrderDto {
  customer_name: string;
  customer_phone: string;
  address: string;
  neighborhood: string;
  delivery_price: number;
  subtotal: number;
  total: number;
  items: {
    product_id: number;
    quantity: number;
    unit_price: number;
  }[];
}
