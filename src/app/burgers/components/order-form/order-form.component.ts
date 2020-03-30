import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BurgersService } from './../../services/burgers.service';
import { IOrder, Order, ICustomerDetails } from '../../../shared/models/order.model';
import { PriceService } from './../../../shared/services/price.servie';
import { IQuantityChangeEvent } from './../burger-customization/burger-customization.component';
import { IIngredientOption, IngredientOptions } from './../burger-customization/burger-customization.component.data';
import { OrderssService } from '../../../shared/services/orders.servie';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  public order: IOrder = new Order();
  public isOrderSubmitted: boolean;
  public currentTab: number;
  public customizationOptions: IIngredientOption[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private burgersService: BurgersService,
    public priceService: PriceService,
    public orderssService: OrderssService
  ) { }

  ngOnInit(): void {
    const burgerType = this.activatedRoute.snapshot.params.burgerType;

    /* TODO:: if the burgerType is not valid, should redirect to burgers list or show message in view */
    this.order.burger =  this.burgersService.getBurgerByType(burgerType);
    this.customizationOptions = IngredientOptions.map((option) => ({
      ...option,
      quantity: this.order.burger.ingredients[option.name] || 0
    }));

  }

  public onQuantityChanged(data: IQuantityChangeEvent) {
    this.order.burger.ingredients[data.ingredient] = data.quantity;
    this.order.burger = {
      ...this.order.burger
    };
  }

  public onCustomerDetailsChanged(customerDetails: ICustomerDetails) {
    this.order.customer = customerDetails;
  }

  public onSubmitOrder() {
    this.orderssService.post(this.order).subscribe( (order) => {
      this.isOrderSubmitted = true;
    } );
  }

  public prev() {
    this.currentTab = this.currentTab - 1;
  }

  public next() {
    this.currentTab = this.currentTab + 1;
  }

}
