import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { IOrder } from './../models/order.model';
import { PriceService } from './../services/price.servie';

@Pipe({
  name: 'orderPrice'
})
export class OrderPricePipe implements PipeTransform {

  constructor(
    private priceService: PriceService,
    private currencyPipe: CurrencyPipe
  ) {}

  public transform(order: IOrder): string {
    const price = this.priceService.getOrderPrice(order);
    return this.currencyPipe.transform(price, 'INR');
  }

}
