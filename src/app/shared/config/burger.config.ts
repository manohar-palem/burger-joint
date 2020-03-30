export enum Ingredients {
  Bun = 'bun',
  Salad = 'salad',
  Cheese = 'cheese',
  Cutlet = 'cutlet',
  Paneer = 'paneer',
  Mashroom = 'mashroom',
  Chilli = 'chilli'
}

export enum BurgerType {
  VanillaBurger = 'vanilla_burger',
  CheeseBurger = 'cheese_burger',
  SaladBurger = 'salad_burger',
  CutletBurger = 'cutlet_burger',
  PaneerBurger = 'paneer_burger',
  ChlliBurger = 'chilli_burger',
  MashroomBurger = 'mashroom_burger'
}

export const IngredientsPrice = {
  [Ingredients.Bun]: 5,
  [Ingredients.Salad]: 5,
  [Ingredients.Cutlet]: 2,
  [Ingredients.Cheese]: 1,
  [Ingredients.Chilli]: 1,
  [Ingredients.Paneer]: 3,
  [Ingredients.Mashroom]: 4,
};

export const IngredientsTitle = {
  [Ingredients.Bun]: 'Bun',
  [Ingredients.Salad]: 'Salad',
  [Ingredients.Cutlet]: 'Cutlet',
  [Ingredients.Cheese]: 'Cheese',
  [Ingredients.Chilli]: 'Jalapeno',
  [Ingredients.Paneer]: 'Paneer',
  [Ingredients.Mashroom]: 'Mashroom',
};

export const MinMaxIngedients: {
  [ingredientName: string]: {
    min: number;
    max: number;
  }
} = {
  [Ingredients.Bun]: { min: 1, max: 2 },
  [Ingredients.Salad]: { min: 0, max: 1 },
  [Ingredients.Cutlet]: { min: 0, max: 3 },
  [Ingredients.Cheese]: { min: 0, max: 5 },
  [Ingredients.Paneer]: { min: 0, max: 3 },
  [Ingredients.Mashroom]: { min: 0, max: 2 },
  [Ingredients.Chilli]: { min: 0, max: 4 }
};

export const BurgerTitle = {
  [BurgerType.VanillaBurger]: 'Vanilla Burger',
  [BurgerType.CheeseBurger]: 'Cheese Burger',
  [BurgerType.CutletBurger]: 'Cutlet Burger',
  [BurgerType.SaladBurger]: 'Salad Burger',
  [BurgerType.PaneerBurger]: 'Paneer Burger',
  [BurgerType.ChlliBurger]: 'Chilli Burger',
  [BurgerType.MashroomBurger]: 'Mashroom Burger',
};


