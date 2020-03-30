import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BurgersComponent } from './components/burgers/burgers.component';
import { BurgersWrapperComponent } from './components/burgers-wrapper/burgers-wrapper.component';
import { OrderFormComponent } from './components/order-form/order-form.component';


const routes: Routes = [
  {
    path: '',
    component: BurgersWrapperComponent,
    children: [
      {
        path: 'list',
        component: BurgersComponent
      },
      {
        path: ':burgerType',
        component: OrderFormComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class BurgersRoutingModule { }
