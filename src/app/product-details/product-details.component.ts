import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
//import{image} from "../home-page/products.constants";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
userid;
//abc= image;
pro=[];
pro1;
detail_prod;
pro2;
checkrole;
profile;

data1;
  constructor(private activatedroute:ActivatedRoute,private http:ItemService,private router:Router) { }

  ngOnInit() {
    this.http.getprofile().subscribe(data=> {
        this.profile = data;
        if (this.profile.email== "admin")
          this.checkrole = true;
        else
          this.checkrole = false;
      }
    )
   // this.pro=this.http.getItemlist();
   // this.pro1=this.http.getDetails();
    this.http.getDetails().subscribe((data)=> {
      this.pro1 = data;
      console.log(this.pro1);
      this.activatedroute.queryParams.subscribe(arg => {
        this.userid = arg.id;
        console.log(this.userid);
        for (let i = 0; i < this.pro1.length; i++) {
          if (this.userid == this.pro1[i].product_id) {
            this.detail_prod = this.pro1[i];
          }
        }
      })
    })

  }
  additemincart(id)
  {
    this.http.addtocart(this.userid).subscribe(data=>
    {
      this.pro2=data;
     // this.router.navigate(['/cart']);
    });
    this.router.navigate(['/cart']);

  }
edit()
{
  this.router.navigate(['/editproduct'],{queryParams:{id:this.userid}});
}
}
