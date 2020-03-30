import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../../shared/models/order.model';
import { OrderssService } from './../../../shared/services/orders.servie';

@Component({
  selector: 'app-orders-wrapper',
  templateUrl: './orders-wrapper.component.html',
  styleUrls: ['./orders-wrapper.component.scss']
})
export class OrdersWrapperComponent implements OnInit {

  public orders: IOrder[] = [];
  public active;
  constructor(private orderssService: OrderssService) { }

  ngOnInit(): void {
    this.orderssService.query().subscribe( (orders) => {
      this.orders = orders;
    });
  }

}
