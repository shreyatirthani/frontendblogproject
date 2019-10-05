import { Component, OnInit } from '@angular/core';
//import {image} from "./products.constants";
import {Router} from "@angular/router";
import {ItemService} from "../item.service";
import {createElementCssSelector} from "@angular/compiler";
import {AppService} from "../app.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  //images = image;
 public uig=[];
 ht;
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
  constructor(private router:Router,private service:ItemService,private appservice:AppService) { }
xyz;
  electrical;
category1=null;
  ngOnInit(){
  this.service.getDetails().subscribe((data)=>{
      this.ht=data;

    });
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
    this.category1='books';
    this.service.getCat('books').subscribe((data1)=>{
      this.ht=data1;
    });
  }
  goelectronics()
  {
    this.category1='electronics';
    this.service.getCat('electronics').subscribe((data1)=>{
      this.ht=data1;
    });
  }
  goclothes()
  {
    this.category1='clothes';
    this.service.getCat('clothes').subscribe((data1)=>{
      this.ht=data1;
    });
  }
  getdata()
  {
    this.service.getDetails().subscribe((data)=>{
      this.ht=data;
    });
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
