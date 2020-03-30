import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IIngredientOption } from './burger-customization.component.data';
import { PriceService } from './../../../shared/services/price.servie';
import { IBurger } from '../../../shared/models/burger.model';
import { IngredientsPrice, Ingredients } from '../../../shared/config/burger.config';


export interface IQuantityChangeEvent {
  ingredient: Ingredients;
  quantity: number;
}

@Component({
  selector: 'app-burger-customization',
  templateUrl: './burger-customization.component.html',
  styleUrls: ['./burger-customization.component.scss']
})
export class BurgerCustomizationComponent implements OnInit {

  @Input() public burger: IBurger;
  @Input() public ingredientOptions: IIngredientOption[] = [];
  @Output() public quantityChanged: EventEmitter<IQuantityChangeEvent> = new EventEmitter();
  public currentRate = 5;
  public ingredientPrice = IngredientsPrice;
  constructor(public priceService: PriceService) { }

  ngOnInit(): void {
  }

  public onRateChange(ingredientOption: IIngredientOption, currentRateValue: number) {
    this.quantityChanged.emit({
      ingredient: ingredientOption.name,
      quantity: currentRateValue
    });
  }

  public trackByIngredientName(index: number, option: IIngredientOption): Ingredients {
    return option.name;
  }

}
