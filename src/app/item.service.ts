import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpclient:HttpClient) {

  }
 /* getItemlist()
  {
    return[


      {
        "url": '../../assets/images/mango 2.jpeg',
        "name":"STYLISH TOPS",
        "price":900,
        "id":1
      },

      {
        "url": '../../assets/images/Shirt Arrow 4.jpeg',
        "name":"TRENDY TSHIRTS",
        "price":600,
        "id":2
      },
      {
        "url": '../../assets/images/shopping (3).png',
        "name":"MIXIE JAR",
        "price":900,
        "id":3
      },
      {
        "url": '../../assets/images/shopping (2).png',
        "name":"SAMSUNG",
        "price":600,
        "id":4
      },
      {
        "url": '../../assets/images/shopping (1).webp',
        "name":"REDME",
        "price":600,
        "id":5
      },
      {
        "url": '../../assets/images/shoppingbag.webp',
        "name":"APJ ABDUL KALAM",
        "price":600,
        "id":6
      },
      {
        "url": '../../assets/images/books.webp',
        "name":"KARMA",
        "price":600,
        "id":7
      },

      {
        url: '../../assets/images/shopping.png',
        "name":"POSITIVITY",
        "price":700,
        "id":8
      },


    ]
  }*/
 /* gotonext()
  {
const url='/assets/data/image.json';
return this.http.get(url);
  }*/
/* getDetails()
 {
   return this.http.get('https://localhost:2020')
 }*/
getDetails()
{const token=sessionStorage.getItem('token');
const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/api/prodetails",{headers});
}
getCat(type)
{const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/api/productcat/"+type,{headers});
}
getPrice(price1,price2)
{const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/api/product1/"+price1+"/between/"+price2,{headers});
}
getCatprice(type,price1,price2)
{const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/api/productcat/"+type +"/"+price1+"/" +price2,{headers});
}
addtocart(id)
{const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/cart/addproduct/receive/"+id,{headers});

}
removeproduct(id)
{
  const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/cart/removeproduct/receive/"+id,{headers});

}
}
