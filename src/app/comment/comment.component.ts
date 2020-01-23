import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LogingService} from "../loging.service";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
public userid;
public datadet;
public det1;
public comment;
public data1;
public x;
public product;
public profile;
  constructor(private activatedroute:ActivatedRoute,private service:LogingService,private service1:ItemService) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(arg => {
      this.userid = arg.id;
    });
    this.service.getdata(this.userid).subscribe(data => {
      this.product = data;
    })

    this.service1.getprofile().subscribe(data => {
      this.profile = data;

    })
    this.service.comment(this.userid).subscribe(data => {
      this.datadet = data;
    })





     if ((this.product.login.email).equals(this.profile.email)) {
        this.x = true;
      } else {
        this.x = false;
      }


  }
  addcomment(id)
  {
    let json={
     "comment":this.comment
    };
    this.service.addcomment(id,json).subscribe(data=>{
      this.datadet=data;
    })


  }
  delcomment(comment,id)
  {
    this.service.delcomment(comment,id).subscribe(data=>{
      this.data1=data;
      alert("deletion");
    })
  }

}
