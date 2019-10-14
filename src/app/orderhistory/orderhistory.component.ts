import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {
public user;
  constructor(private service:ItemService) { }

  ngOnInit() {
   this.service.orderhistory().subscribe(data=>{
      this.user=data;
    })
  }

}
