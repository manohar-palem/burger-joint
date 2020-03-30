import { Ingredients, IngredientsTitle, MinMaxIngedients } from '../../../shared/config/burger.config';

export interface IIngredientOption {
  name: Ingredients;
  quantity: number;
  title: string;
  max: number;
  resettable?: boolean;
}

export const IngredientOptions: IIngredientOption[] = Object.entries(Ingredients)
  .map( ([ingredintLabel, ingredinetName]) => {
    const ingredient = ingredinetName as Ingredients;
    return {
      name: ingredient,
      title: IngredientsTitle[ingredient],
      quantity: 0,
      max: MinMaxIngedients[ingredient].max,
      resettable: ingredient !== Ingredients.Bun
    };
  } );
