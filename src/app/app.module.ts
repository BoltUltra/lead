import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntlComponent } from './intl/intl.component';
import { NigComponent } from './nig/nig.component';
import { TopintlComponent } from './topintl/topintl.component';

@NgModule({
  declarations: [
    AppComponent,
    IntlComponent,
    NigComponent,
    TopintlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
