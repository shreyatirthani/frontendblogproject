import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LogingService} from "../loging.service";

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
  constructor(private activatedroute:ActivatedRoute,private service:LogingService) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(arg => {
      this.userid = arg.id;
    });
    this.service.comment(this.userid).subscribe(data=>{
      this.datadet=data;
    })

  }
  addcomment(id)
  {
    let json={
     "comment":this.comment
    };
    this.service.addcomment(id,json).subscribe(data=>{
      this.data1=data;
    })
  }

}
