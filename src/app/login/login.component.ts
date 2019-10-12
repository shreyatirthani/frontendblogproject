import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../item.service";
import {LogingService} from "../loging.service";
import {AppService} from "../app.service";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private router:Router,private service: AppService,private authservice:AuthenticationService) { }

  ngOnInit() {

   if(this.service.checklogin())
   {
     this.router.navigate(['/home']);
   }

  }
  login()
  {

    this.authservice.authenticate(this.email,this.password).subscribe(
      data=> {
        this.service.isLoggedIn(true);
        this.router.navigate(['home']);
      }
    );

  }
logout()
{
  this.service.isLoggedIn(false);
}
login22()
{
  this.router.navigate(['/signup']);
}
}
