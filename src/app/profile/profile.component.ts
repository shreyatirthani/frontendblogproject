import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
profile;
public pro;
public email;
public password;
public phoneno;
public address;
  constructor(private service:ItemService) { }

  ngOnInit() {
    this.service.getprofile().subscribe(data=>
    this.profile=data
    )
  }
  update()
  {
    this.service.updation(this.profile).subscribe(data=>
      this.profile=data
    )
  }

}
