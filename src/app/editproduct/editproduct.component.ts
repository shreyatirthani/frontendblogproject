import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
public name;
public price;
public details;
public category;
public userid;
public product;
  constructor(private service:ItemService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
this.activatedroute.queryParams.subscribe(data=>
{
  this.userid=data.id;
});
    this.service.edit(this.userid).subscribe(data=>{
      this.product=data;
    }
   )


  }

  editproduct()
  { /*let json={
    "name":this.product.name,
    "price":this.product.price,
    "details":this.product.details,
    "category":this.product.category,

  };*/
    this.service.editproduct(this.userid,this.product).subscribe(data=>{
       alert("product edited");
      }
    )
}
}
