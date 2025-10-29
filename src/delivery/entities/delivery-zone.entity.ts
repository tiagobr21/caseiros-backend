import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('delivery_zones')

export class DeliveryZone {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    neighborhood: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
}