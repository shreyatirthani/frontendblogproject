import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartsComponent } from './user-carts/user-carts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProductDetailsComponent,
    UserCartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
