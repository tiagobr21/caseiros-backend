import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Orders } from "./orders.entity";

@Entity()
export class OrderItems {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders, order => order.items)
  order: Orders;

  @Column()
  product_id: number;

  @Column()
  quantity: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  unit_price: number;

}
