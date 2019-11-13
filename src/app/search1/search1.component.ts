import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LogingService} from "../loging.service";

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.scss']
})
export class Search1Component implements OnInit {
  public username;
  public ht;

  constructor(private service: ItemService, private activatedroute: ActivatedRoute,private router:Router,private service1:LogingService) {
  }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(arg => {
      this.username = arg.name;
    })
    this.service.search(this.username).subscribe(data => {
      this.ht = data;


    })
  }
    getdata11(id)
    {
      this.router.navigate(['/view'],{queryParams:{id:id}});
    }
    follow(name)
    {
      this.service1.follow(name).subscribe(data=>{
        alert("following her");
        this.ht=data;
      })
    }


}
