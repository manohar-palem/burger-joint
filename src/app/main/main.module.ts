import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainRoutingModule } from './main-routing.module';
import { AppComponent } from './components/app/app.component';
import { components } from './components';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MainModule { }
