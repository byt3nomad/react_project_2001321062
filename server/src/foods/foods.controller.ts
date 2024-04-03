import { Controller, Post, Body, Get } from '@nestjs/common';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
    constructor(private readonly foodService: FoodsService) { }

    @Post()
    addFood(
        @Body('description') foodDescription: string,
        @Body('calories') calories: number,
        @Body('protein') protein: number,
        @Body('fat') fat: number,
        @Body('carbs') carbs: number,
    ): any {
        const generatedId = this.foodService.insertFood(foodDescription, calories, protein, fat, carbs);
        return { id: generatedId };
    }

    @Get()
    getAllFoods() {
        return this.foodService.getFoods();
    }
}
