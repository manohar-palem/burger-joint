import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersRoutingModule } from './orders-routing.module';
import { components } from './components';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule,
    NgbNavModule,
    PipesModule
  ],
  providers: []
})
export class OrdersModule { }
