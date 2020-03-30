import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOrder } from '../../../shared/models/order.model';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {

  @Input() public order: IOrder;
  @Output() public submitOrder: EventEmitter<any> = new EventEmitter();
  public brugerPrice: number;
  public totalOrderPrice: number;
  public areCustomerDetailsValid: boolean;
  public submitted: boolean;
  constructor() { }

  ngOnInit(): void {
    this.validateCustomerDetails();
  }

  public initiatteOrder() {
    this.submitted = true;
    if (this.areCustomerDetailsValid) {
      this.submitOrder.emit();
    }
  }

  private validateCustomerDetails() {
    const { name, phone } = this.order.customer;
    this.areCustomerDetailsValid = Boolean(name && phone && phone.length === 10);
  }

}
