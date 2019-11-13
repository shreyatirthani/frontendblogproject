import { Component, OnInit } from '@angular/core';
import {LogingService} from "../loging.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  public ht;

  constructor(private service: LogingService, private router: Router) {
  }

  ngOnInit() {
    this.service.showmyblogs().subscribe(data => {
      this.ht = data;
    })
  }

  un(id) {
    this.service.unsub(id).subscribe(data => {
      this.ht = data;
      alert("your blog is unsubscribed");
    })
  }

  getdata(id) {
    /*this.service.getdata(id).subscribe(data=>{
      this.ht=data;
    })
  }*/
    this.router.navigate(['/editproduct'], {queryParams: {id: id}});
  }
}
