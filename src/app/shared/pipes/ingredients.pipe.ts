import { Pipe, PipeTransform } from '@angular/core';

import { IBurger } from './../models/burger.model';
import { IngredientsTitle } from './../config/burger.config';

@Pipe({
  name: 'ingredients'
})
export class IngredientsPipe implements PipeTransform {

  constructor() {}

  public transform(burger: IBurger): string {
    return Object.entries(burger.ingredients)
      .filter( ([ingredName, quantity]) => quantity )
      .map( ([ingredName, quantity]) => {
        return `${IngredientsTitle[ingredName]}:${quantity}`;
      } ).join(', ');
  }

}
