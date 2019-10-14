import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public profile;
  constructor(private service:ItemService) { }

  ngOnInit() {
    this.service.getprofile().subscribe(data=>
    this.profile=data
    )
  }

}
