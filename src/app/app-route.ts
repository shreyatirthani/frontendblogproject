import {Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {UserCartsComponent} from "./user-carts/user-carts.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {OrderhistoryComponent} from "./orderhistory/orderhistory.component";
import {ProfileComponent} from "./profile/profile.component";
import {AddproductComponent} from "./addproduct/addproduct.component";
import {EditproductComponent} from "./editproduct/editproduct.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";
import {ViewComponent} from "./view/view.component";
import {Search1Component} from "./search1/search1.component";
import {Subscribe11Component} from "./subscribe11/subscribe11.component";
import {ViewdetailComponent} from "./viewdetail/viewdetail.component";
import {CommentComponent} from "./comment/comment.component";

export const MAIN_ROUTES:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'cart',component:UserCartsComponent},
  {path:'details',component:ProductDetailsComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'orderhistory',component:OrderhistoryComponent },
  {path:'profile',component:ProfileComponent },
  {path:'addproduct',component:AddproductComponent },
  {path:'editproduct',component:EditproductComponent },
  {path:'subscribe',component:SubscribeComponent},
  {path:'view',component:ViewComponent},
  {path:'search1',component:Search1Component},
  {path:'subscribe11',component:Subscribe11Component},
  {path:'viewdetail',component:ViewdetailComponent},
  {path:'comment',component:CommentComponent},
  {path:'**',component:PagenotfoundComponent},

];
