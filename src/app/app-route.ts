import {Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {UserCartsComponent} from "./user-carts/user-carts.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

export const MAIN_ROUTES:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'cart',component:UserCartsComponent},
  {path:'details',component:ProductDetailsComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

  {path:'**',component:PagenotfoundComponent},

];
