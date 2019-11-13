import { Component, OnInit } from '@angular/core';
import {LogingService} from "../loging.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public demo;
  public userid;

  constructor(private service: LogingService, private activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(arg => {
      this.userid = arg.id;

    })
    this.service.getid1(this.userid).subscribe(data => {
      this.demo = data;
    })
  }



}
