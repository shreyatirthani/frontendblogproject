import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../item.service";
import {LogingService} from "../loging.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
demo;
  constructor(private router:Router,private service: LogingService) { }

  ngOnInit() {
    this.service.getInfo().subscribe((data)=> {
      this.demo = data;
    });
  }

}
