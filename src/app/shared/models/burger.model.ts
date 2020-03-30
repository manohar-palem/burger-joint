import { Ingredients, BurgerType } from '../config/burger.config';

export interface IBurger {
  name: string;
  type: BurgerType;
  ingredients: {
    [Ingredients.Bun]: number;
    [Ingredients.Salad]?: number;
    [Ingredients.Cutlet]?: number;
    [Ingredients.Cheese]?: number;
    [Ingredients.Chilli]?: number;
    [Ingredients.Paneer]?: number;
    [Ingredients.Mashroom]?: number;
  };
  title?: string;
  thumbnail?: string;
  description?: string;
}

export class Burger implements IBurger {
  name = '';
  type = BurgerType.CheeseBurger;
  ingredients = { [Ingredients.Bun]: 1 };
  title = '';
  thumbnail = '';
  description = '';
}
