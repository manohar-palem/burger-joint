import { NgModule } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { BurgerPricePipe } from './burger-price.pipe';
import { OrderPricePipe } from './order-price.pipe';
import { IngredientsPipe } from './ingredients.pipe';
import { FilterPipe } from './filter.pipe';

const pipes = [
  OrderPricePipe,
  BurgerPricePipe,
  IngredientsPipe,
  FilterPipe
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...pipes
  ],
  exports: [
    ...pipes
  ],
  providers: [
    CurrencyPipe
  ]
})
export class PipesModule { }
