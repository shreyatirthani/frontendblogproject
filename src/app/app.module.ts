import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartsComponent } from './user-carts/user-carts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {ItemService} from "./item.service";
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "./authentication.service";
import {AppService} from "./app.service";
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProductDetailsComponent,
    UserCartsComponent,
    ProductListComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    OrderhistoryComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemService,AuthenticationService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
