import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';
//PartialType makes every type  optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  // readonly id?: number;
  // readonly name?: string;
  // readonly brand?: string;
  // readonly flavors?: string[];
}
