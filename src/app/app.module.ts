import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdvicesComponent } from './home-component/advices/advices.component';
import { AchivedComponent } from './home-component/achived/achived.component';
import { QuotesComponent } from './home-component/quotes/quotes.component';
import { MessagingOfferComponent } from './home-component/messaging-offer/messaging-offer.component';
import { MoveUpComponent } from './move-up/move-up.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponentComponent,
    AdvicesComponent,
    AchivedComponent,
    QuotesComponent,
    MessagingOfferComponent,
    MoveUpComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
