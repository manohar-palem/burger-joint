import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: []
})
export class TestModule { }
