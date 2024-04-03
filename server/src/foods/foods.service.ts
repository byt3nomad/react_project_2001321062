import { Injectable } from '@nestjs/common';
import { Food } from './food.model';

@Injectable()
export class FoodsService {
    private foods: Food[] = [
        new Food('1', 'Apple', 52, 0.3, 0.2, 14),
        new Food('2', 'Banana', 89, 1.1, 0.3, 23),
        new Food('3', 'Chicken Breast', 165, 31, 3.6, 0),
        new Food('4', 'Broccoli', 34, 2.8, 0.4, 6.6),
        new Food('5', 'Almonds', 579, 21, 49.9, 21.6),
        new Food('6', 'Eggs', 155, 13, 11, 1.1),
    ];


    insertFood(description: string, calories: number, protein: number, fat: number, carbs: number): string {
        const foodId = new Date().toISOString();
        const newFood = new Food(foodId, description, calories, protein, fat, carbs);
        this.foods.push(newFood);
        return foodId;
    }

    getFoods(): Food[] {
        return [...this.foods];
    }
}
