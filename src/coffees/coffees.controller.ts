import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get('flavor')
  fidAll(@Query() paginationQuery: any) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees.Limit: ${limit},Offset: ${offset}`;
    return this.coffeesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffee`;
    return this.coffeesService.findOne(id);
  }
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // return body;
    return this.coffeesService.create(createCoffeeDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates #${id} coffee`;
    return this.coffeesService.update(id, updateCoffeeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffee`;
    this.coffeesService.remove(id);
  }
}
