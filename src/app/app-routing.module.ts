import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from 'src/app/pages/home-page/home-page.component'
import { NavBarComponent } from './units/nav-bar/nav-bar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DiatrictPageComponent } from './pages/diatrict-page/diatrict-page.component';
import { HotSpotPageComponent } from './pages/hot-spot-page/hot-spot-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CardsComponent } from './units/cards/cards.component';
import {SinglePageComponent} from './pages/single-page/single-page.component'
import {SigninComponent} from './pages/signin/signin.component'

const routes: Routes = [
  {path:'',component: HomePageComponent,},
  {path:'district',component: DiatrictPageComponent,},
  {path:'hotspot',component: HotSpotPageComponent,},
  {path:'login',component: LoginPageComponent,},
  {path:'single',component:SinglePageComponent},
  {path:'signIN',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
