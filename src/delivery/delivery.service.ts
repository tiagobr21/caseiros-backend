import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryZone } from './entities/delivery-zone.entity';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(DeliveryZone)
    private readonly deliveryRepo: Repository<DeliveryZone>,
  ) {}

  async findAll() {
    return await this.deliveryRepo.find();
  }

  async getFrete(neighborhood: string): Promise<number> {
    const zone = await this.deliveryRepo.findOne({
      where: { neighborhood: neighborhood },
    });
    return zone ? Number(zone.price) : 0;
  }
}
