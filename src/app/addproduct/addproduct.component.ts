import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {LogingService} from "../loging.service";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
public blogname;
public owner;
public content;
public title;
public ht;
public paragraph;
  constructor(private service:ItemService,private service1:LogingService) { }

  ngOnInit() {
    this.service1.showmyblogs().subscribe(data=>{
      this.ht=data;
    })
  }
addproduct()
{
  let json={
    "blogname":this.blogname,
  "owner":this.owner,
    "paragraph":this.paragraph,
    "content":this.content
  };
  this.service.addproduct(json).subscribe(data=>{
    //alert("blog saved");
    this.ht=data;
  })
}



}
