import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
public name;
public price;
public details;
public category;
  constructor(private service:ItemService) { }

  ngOnInit() {
  }
addproduct()
{
  let json={
    "name":this.name,
  "price":this.price,
    "details":this.details,
    "category":this.category,

  };
  this.service.addproduct(json).subscribe(data=>{
    alert("product added");
  })
}



}
