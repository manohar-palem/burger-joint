import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICustomerDetails } from '../../../shared/models/order.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() public customer: ICustomerDetails;
  @Output() public customerDetailsChanged: EventEmitter<ICustomerDetails> = new EventEmitter();

  public customerDetails: ICustomerDetails;
  constructor() { }

  ngOnInit(): void {
    this.customerDetails = {
      ...this.customer
    };
  }

  onInputChange() {
    this.customerDetailsChanged.emit(this.customerDetails);
  }

}
