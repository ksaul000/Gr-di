import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BingoComponent } from './bingo/bingo.component';
// import { AriciComponent } from './arici/arici.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
