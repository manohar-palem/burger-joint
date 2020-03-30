import { Component, OnInit } from '@angular/core';
import { BurgersService } from './../../services/burgers.service';
import { PriceService } from './../../../shared/services/price.servie';
import { IBurger } from '../../../shared/models/burger.model';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent implements OnInit {

  public burgers: IBurger[] = [];
  constructor(
    public burgersService: BurgersService,
    public priceService: PriceService
  ) { }

  ngOnInit(): void {
    this.burgersService.query().subscribe( (burgers) => {
      this.burgers = burgers;
    } );
  }

  public trackByBurgerTypeFn(index: number, burger: IBurger) {
    return burger.type;
  }

}
