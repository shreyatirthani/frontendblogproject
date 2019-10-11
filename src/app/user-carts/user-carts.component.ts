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
  constructor(private http:ItemService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {

    this.http.getDetails().subscribe((data) => {
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
    })
  }
    remove1(id)
    {this.http.removeproduct(this.userid).subscribe(data=>
    {
      this.pro2=data;
      // this.router.navigate(['/cart']);
    });
alert("item removed");
    }






}
