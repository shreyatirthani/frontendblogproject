import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-carts',
  templateUrl: './user-carts.component.html',
  styleUrls: ['./user-carts.component.scss']
})
export class UserCartsComponent implements OnInit {
public productdetail;
public pro1;
public userid;
public pro2;
public pro3;
public pro4;
public ht;
public demo;
public total=0;
public sum=0;
  constructor(private http:ItemService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit() {

   /* this.http.getDetails().subscribe((data) => {
      this.pro1 = data;
      console.log(this.pro1);
      this.activatedroute.queryParams.subscribe(arg => {
        this.userid = arg.id;
        console.log(this.userid);
        for (let i = 0; i < this.pro1.length; i++) {
          if (this.userid == this.pro1[i].product_id) {
            this.productdetail = this.pro1[i];
          }
        }
      })
    })*/
    this.http.showcart().subscribe(data=>{

      this.ht=data;
      for(let i=0;i<this.ht.length;i++)
      {
        this.sum+=this.ht[i].items.price*(this.ht[i].quantity);
      }

    });




  }
    remove1(id)
    {this.http.removeproduct(id).subscribe(data=>
    {
      this.ht=data;
      for(let i=0;i<this.ht.length;i++)
      {
        this.sum+=this.ht[i].items.price*(this.ht[i].quantity);
      }
      this.ngOnInit();
      // this.router.navigate(['/cart']);
    });
//alert("item removed");

    }
increment(id)
{
  this.http.increment(id).subscribe(data=>
  {
    this.ht=data;
    for(let i=0;i<this.ht.length;i++)
    {
      this.sum+=this.ht[i].items.price*(this.ht[i].quantity);
    }
   this.ngOnInit();
  })



}
  decrement(id)
  {
    this.http.decrement(id).subscribe(data=>
    {
      this.ht=data;
      this.ngOnInit();
    })


  }
  order()
  {
    this.router.navigate(['/orderhistory']);
  }

clear()
{
  this.http.clearcart().subscribe(data=>{
    this.demo=data;
    alert("your cart is cleared");
  })
}




}
