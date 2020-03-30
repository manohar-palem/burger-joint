import { Injectable } from '@angular/core';
import { IBurger } from '../models/burger.model';
import { IOrder } from '../models/order.model';
import { IngredientsPrice } from '../config/burger.config';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  public getBurgerPrice(burger: IBurger): number {
    return Object.entries(burger.ingredients).reduce((totalPrice, [ingredName, quantity]) => {
      return totalPrice + IngredientsPrice[ingredName] * quantity;
    }, 0);
  }

  public getOrderPrice({ burger, additionalCharges: { tax, serviceCharges }, discount }: IOrder): number {
    return this.getBurgerPrice(burger) + (tax + serviceCharges) - discount;
  }

}
