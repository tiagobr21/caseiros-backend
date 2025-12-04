import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    profile: string;

    @Column()
    tel: number;

    @Column()
    neighborhood: string;
    
    @Column()
    address: string;

   
    
}