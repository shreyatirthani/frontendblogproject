import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LogingService} from "../loging.service";

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.scss']
})
export class ViewdetailComponent implements OnInit {
  public name;
public ht;
  constructor(private activatedroute: ActivatedRoute, private service: LogingService) {
  }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(arg => {
      this.name = arg.name;
    })
    this.service.getbyname(this.name).subscribe(data=>{
      this.ht=data;
    })

  }
}
