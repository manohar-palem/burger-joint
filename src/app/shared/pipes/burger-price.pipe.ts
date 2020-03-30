import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IBurger } from './../models/burger.model';
import { PriceService } from './../services/price.servie';

@Pipe({
  name: 'burgerPrice'
})
export class BurgerPricePipe implements PipeTransform {

  constructor(
    private priceService: PriceService,
    private currencyPipe: CurrencyPipe
  ) {}

  public transform(burger: IBurger): string {
    const price = this.priceService.getBurgerPrice(burger);
    return this.currencyPipe.transform(price, 'INR');
  }

}
