import { Component, OnInit, Input, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { IOrder } from '../../../shared/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  @Input() public orders: IOrder[] = [];
  @ViewChild('tableElem') tableElem: ElementRef;
  public searchStr: string;
  public tableHeight: number;

  constructor() { }

  ngOnInit(): void {}

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
