import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersWrapperComponent } from './components/orders-wrapper/orders-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: OrdersWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
