import { Component, OnInit, Input, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { IOrder } from '../../../shared/models/order.model';
import { PriceService } from './../../../shared/services/price.servie';

interface ICustomerOrder {
  customerName: string;
  totalOrders: number;
  price: number;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit, AfterViewInit {

  @Input() public orders: IOrder[] = [];
  @ViewChild('tableElem') tableElem: ElementRef;

  public customerOrders: ICustomerOrder[] = [];
  public searchStr: string;
  public tableHeight = 0;

  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
    const ordersByCustomer: { [customerName: string]: IOrder[] } = {};
    this.orders.forEach((order) => {
      ordersByCustomer[order.customer.name] = ordersByCustomer[order.customer.name] || [];
      ordersByCustomer[order.customer.name].push(order);
    });

    this.customerOrders = Object.entries(ordersByCustomer)
      .map(([customerName, orders]) => ({
        customerName,
        totalOrders: orders.length,
        price: orders.reduce((totalPrice, order) => (totalPrice + this.priceService.getOrderPrice(order)), 0)
      }));
  }

  ngAfterViewInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    if (this.tableElem) {
      const top = this.tableElem.nativeElement.offsetTop;
      const winHeight = window.innerHeight;
      this.tableHeight = winHeight - top - 30;
    }
  }

}
