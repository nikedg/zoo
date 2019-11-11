import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BeastsPanelComponent } from './beasts-panel/beasts-panel.component';
import { BeastCardComponent } from './beast-card/beast-card.component';
import { BirdsPanelComponent } from './birds-panel/birds-panel.component';
import { BirdCardComponent } from './bird-card/bird-card.component';
import { WildsPanelComponent } from './wilds-panel/wilds-panel.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BeastsPanelComponent,
    BeastCardComponent,
    BirdsPanelComponent,
    BirdCardComponent,
    WildsPanelComponent,
    WildCardComponent,
    PaginatorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
