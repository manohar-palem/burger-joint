import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { PipesModule } from './../shared/pipes/pipes.module';
import { BurgersRoutingModule } from './burgers-routing.module';
import { components } from './components';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    NgbNavModule,
    NgbRatingModule,
    BurgersRoutingModule
  ],
  providers: []
})
export class BurgersModule { }
