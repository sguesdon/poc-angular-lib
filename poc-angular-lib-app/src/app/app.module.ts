import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MylibModule } from '@sguesdon/mylib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MylibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
