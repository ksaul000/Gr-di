import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TryComponent } from './try/try.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { BingoComponent } from './bingo/bingo.component';
import { AriciComponent } from './arici/arici.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StartButtonComponent } from './start-button/start-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AriciComponent,
    HomepageComponent,
    TryComponent,
    SelectButtonComponent,
    BingoComponent,
    StartButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
