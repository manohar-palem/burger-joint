import { IBurger, Burger } from '../models/burger.model';
import { BurgerType, Ingredients, BurgerTitle } from '../config/burger.config';
const placehoderImg = 'assets/images/burger-placeholder.xs.png';
const burgerDesc = 'It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun.'

interface IBurgerDesc {
  img: string;
  description: string;
  ingredients: {
    [ingredientName: string]: number;
  };
}

const BURGERS_DESC: { [burgerType: string]: IBurgerDesc } = {
  [BurgerType.CheeseBurger]: {
    img: placehoderImg,
    description: burgerDesc,
    ingredients: {
      [Ingredients.Bun]: 1,
      [Ingredients.Cheese]: 1
    }
  },
  [BurgerType.CutletBurger]: {
    img: placehoderImg,
    description: burgerDesc,
    ingredients: {
      [Ingredients.Bun]: 1,
      [Ingredients.Cutlet]: 1
    }
  },
  [BurgerType.SaladBurger]: {
    img: placehoderImg,
    description: burgerDesc,
    ingredients: {
      [Ingredients.Bun]: 1,
      [Ingredients.Salad]: 1
    }
  },
  [BurgerType.ChlliBurger]: {
    img: placehoderImg,
    description: burgerDesc,
    ingredients: {
      [Ingredients.Bun]: 1,
      [Ingredients.Chilli]: 1
    }
  },
  [BurgerType.PaneerBurger]: {
    img: placehoderImg,
    description: burgerDesc,
    ingredients: {
      [Ingredients.Bun]: 1,
      [Ingredients.Paneer]: 1
    }
  },
  [BurgerType.MashroomBurger]: {
    img: placehoderImg,
    description: burgerDesc,
    ingredients: {
      [Ingredients.Bun]: 1,
      [Ingredients.Mashroom]: 1
    }
  },
  [BurgerType.VanillaBurger]: {
    img: placehoderImg,
    description: burgerDesc ,
    ingredients: {
      [Ingredients.Bun]: 1
    }
  }
};

export function getBurgerByType(type: BurgerType): IBurger {
  const burger = new Burger();
  const desc: IBurgerDesc = BURGERS_DESC[type];
  Object.entries(desc.ingredients).forEach( ([name, value]) => {
    burger.ingredients[name] = value;
  } );
  burger.type = type;
  burger.title = BurgerTitle[type];
  burger.description = desc.description;
  burger.thumbnail = placehoderImg;
  return burger;
};

export const BURGERS: IBurger[] = Object.keys(BURGERS_DESC).map( (type) => {
  return getBurgerByType(type as BurgerType);
} );
