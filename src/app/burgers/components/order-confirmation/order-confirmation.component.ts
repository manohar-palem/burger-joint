import { Component, OnInit, Input } from '@angular/core';
import { IOrder } from '../../../shared/models/order.model';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  @Input() public order: IOrder;
  constructor() { }

  ngOnInit(): void {
  }

}
