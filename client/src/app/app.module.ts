import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from '../app/modules/security/login/login.component'

const routes: Routes=[
  {path: '', component: NavbarComponent},
  {path: 'login',component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
