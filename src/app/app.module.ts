import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TryComponent } from './try/try.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { BingoComponent } from './bingo/bingo.component';
import { AriciComponent } from './arici/arici.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { Level1Component } from './level1/level1.component';
import { SquareSelectButtonComponent } from './square-select-button/square-select-button.component';
import { NivelIarna1Component } from './nivel-iarna1/nivel-iarna1.component';

@NgModule({
  declarations: [
    AppComponent,
    AriciComponent,
    HomepageComponent,
    TryComponent,
    SelectButtonComponent,
    BingoComponent,
    StartButtonComponent,
    Level1Component,
    SquareSelectButtonComponent,
    NivelIarna1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
