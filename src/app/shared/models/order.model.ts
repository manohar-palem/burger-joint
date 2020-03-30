import { IBurger, Burger } from './burger.model';
import { ADDITIONAL_CHARGES, DISCOUNT } from '../config/order.config';

export interface ICustomerDetails {
  name: string;
  phone: string;
  email?: string;
}

export class CustomerDetails implements ICustomerDetails {
  name = '';
  phone = '';
}

export interface IAdditionalCharges {
  tax?: number;
  serviceCharges?: number;
}

export interface IOrder {
  burger: IBurger;
  customer: ICustomerDetails;
  id?: string;
  time?: Date;
  discount?: number;
  additionalCharges?: IAdditionalCharges;
}

export class Order implements IOrder {
  burger = new Burger();
  customer = new CustomerDetails();
  discount = DISCOUNT;
  additionalCharges = {
    tax: ADDITIONAL_CHARGES.TAX,
    serviceCharges: ADDITIONAL_CHARGES.SERVIE_CHARGES
  };
}
