import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import { OrderItems } from "./order-item.entity";

@Entity()
export class Orders {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  customer_phone: string;

  @Column()
  address: string;

  @Column()
  neighborhood: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  subtotal: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  delivery_price: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total: number;


  @OneToMany(() => OrderItems, item => item.order, { cascade: true })
  items: OrderItems[];
}
