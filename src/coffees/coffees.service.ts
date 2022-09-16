import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Luke Skywalker',
      brand: 'Starbucks',
      flavors: ['bitter', 'sweet', 'chocolate'],
    },
  ];

  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      return new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }
  create(coffee: CreateCoffeeDto) {
    this.coffees.push(coffee);
  }
  update(id: string, coffee: UpdateCoffeeDto) {
    const coffeeEexist = this.findOne(id);
    if (coffeeEexist) {
      return `更新成功 ${coffee}`;
    }
  }
  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
