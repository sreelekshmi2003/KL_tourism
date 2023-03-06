import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './units/nav-bar/nav-bar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DiatrictPageComponent } from './pages/diatrict-page/diatrict-page.component';
import { HotSpotPageComponent } from './pages/hot-spot-page/hot-spot-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CardsComponent } from './units/cards/cards.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutPageComponent,
    DiatrictPageComponent,
    HotSpotPageComponent,
    LoginPageComponent,
    CardsComponent,
    FooterComponent,
    SinglePageComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
