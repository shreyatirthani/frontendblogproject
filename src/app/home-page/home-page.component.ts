import { Component, OnInit } from '@angular/core';
//import {image} from "./products.constants";
import {Router} from "@angular/router";
import {ItemService} from "../item.service";
import {createElementCssSelector} from "@angular/compiler";
import {AppService} from "../app.service";
import {LogingService} from "../loging.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  //images = image;
  checkrole;
  profile;
 public uig=[];
 ht;
 public name;
 public demo;
  price=[
    {
      "amt":"200-400",
      number1: 200,
      number2: 400,
    },
    {
      "amt":"500-800",
      number1: 500,
      number2: 800,
    },
    {
      "amt":"800-1000",
      number1: 800,
      number2: 1000,
    },
    {
      "amt":"9000-10000",
      number1: 9000,
      number2: 10000,
    }
  ];
  constructor(private router:Router,private service:ItemService,private appservice:AppService,private service1:LogingService) { }
xyz;
  electrical;
category1=null;
  ngOnInit(){
   /* this.service.getprofile().subscribe(data=> {
        this.profile = data;
        if (this.profile.email== "admin")
          this.checkrole = true;
        else
          this.checkrole = false;
      }
    );*/
    this.service.getDetails().subscribe((data)=>{
      this.ht=data;
    });

 /* this.service.getDetails().subscribe((data)=>{
      this.ht=data;

    });*/
   /* this.service.getDetails().subscribe((data)=> {
      this.ht = data;
    });*/
  if(!this.appservice.checklogin())
  {
    this.router.navigate(['/login']);
  }
 // this.uig=this.service.getItemlist();
  }
  logout()
  {
    this.appservice.isLoggedIn(false);
    this.router.navigate(['/login']);
  }


  goToDetails(id)
  {
    console.log(id);
    this.router.navigate(['/details'],{queryParams:{id:id}});
  }
  gocat()
  {

    this.service.getCat('fashion').subscribe((data1)=>{
      this.ht=data1;
    });
  }
  goelectronics()
  {

    this.service.getCat('fitness').subscribe((data1)=>{
      this.ht=data1;
    });
  }
  goclothes()
  {

    this.service.getCat('cooking').subscribe((data1)=>{
      this.ht=data1;
    });
  }
  gopoems()
  {

    this.service.getCat('poems').subscribe((data1)=>{
      this.ht=data1;
    });
  }
  getdata()
  {
    this.service.getDetails().subscribe((data)=>{
      this.ht=data;
    });
  }
  gotravel()
  {
    this.service.getCat('travel').subscribe((data1)=> {
      this.ht = data1;
    });
  }
searching()
{
  this.router.navigate(['/search1'],{queryParams:{name:this.name}});
  /*this.service.search(this.name).subscribe(data=>{
    this.ht=data;

  })*/
}

  gocatprice( price1, price2)
  {
    if(this.category1==null) {
      this.service.getPrice(price1, price2).subscribe((data1) => {
        this.ht = data1;
      });
    }
    else
      {

        this.service.getCatprice(this.category1,price1, price2).subscribe((data1) => {
          this.ht = data1;
        });
      }
    }



 /* showelectrical()
  {
    this.service.getelectrical('electrical').subscribe((data1)=>{
      this.xyz=data1;
    });
  }
  showhome()
  {
    this.service.getDetails().subscribe((data2)=>{
      this.xyz=data2;
    });
  }
  showbooks()
  {
    this.service.getelectrical('book').subscribe((data3)=>{
      this.xyz=data3;
    });
  }*/


}
