import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ORDERS } from '../data/orders.data';
import { IOrder } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderssService {

  // query list of burgers
  public query(): Observable<IOrder[]> {
    // API call

    return of(ORDERS);

  }

  // get an order by id
  public get(burgerId: string) {
    // API call
  }

  // save order details
  public post(payload: IOrder): Observable<IOrder> {
    // API call

    const order: IOrder = {
      ...payload,
      time: new Date()
    };
    ORDERS.push(order);
    return of(order);
  }

  // delete order by id
  public delete(id: string) {
    // API call
  }


}
