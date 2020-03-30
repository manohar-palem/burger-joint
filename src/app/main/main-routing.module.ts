import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () => import('../orders/orders.module').then( m => m.OrdersModule)
  },
  {
    path: 'burgers',
    loadChildren: () => import('../burgers/burgers.module').then( m => m.BurgersModule )
  },
  {
    path: '',
    redirectTo: 'burgers',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'burgers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
