import { Component, OnInit } from '@angular/core';
import {LogingService} from "../loging.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscribe11',
  templateUrl: './subscribe11.component.html',
  styleUrls: ['./subscribe11.component.scss']
})
export class Subscribe11Component implements OnInit {
public ht;
  constructor(private service1:LogingService,private router:Router) { }

  ngOnInit() {
    this.service1.showsubscribe().subscribe(data=>{
      this.ht=data;
    })
  }
  open(name)
  {
    this.router.navigate(['/viewdetail'],{queryParams:{name:name}});
  }
delfollow(name)
{
  this.service1.delfollow(name).subscribe(data=>{
    alert("unfollow");
    this.ht=data;
  })
}

}
