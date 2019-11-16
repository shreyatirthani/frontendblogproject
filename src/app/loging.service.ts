import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogingService {

  constructor(private httpclient:HttpClient) { }
  getInfo()
  {
    return this.httpclient.get("http://localhost:2020/apl/log");
  }
  getuser(json)
  {
    return this.httpclient.post("http://localhost:2020/apl/sign",json);
  }
  showmyblogs()

  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpclient.get("http://localhost:2020/sub/show1",{headers});
  }
  unsub(id)
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpclient.get("http://localhost:2020/sub/del/"+id,{headers});
  }
  getdata(id)
  {const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpclient.get("http://localhost:2020/sub/getdata/"+id,{headers});

  }
  updation(id,json)
  {
    const token=sessionStorage.getItem('token');
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.httpclient.put("http://localhost:2020/sub/up/"+id,json,{headers});
  }
getid1(id)
{
  const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/blog/getblogs/"+id,{headers});
}
follow(name)
{ const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/sub/subscribe1/"+name,{headers});

}
showsubscribe()
{
  const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/sub/showsubscribe1",{headers});
}
getbyname(name)
{
  const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/sub/getuser/"+name,{headers});
}
delfollow(name)
{
  const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/sub/delfollower/"+name,{headers});
}
comment(id)
{
  const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.get("http://localhost:2020/sub/comment/"+id,{headers});
}
addcomment(id,json)
{
  const token=sessionStorage.getItem('token');
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.httpclient.post("http://localhost:2020/sub/savecomment/"+id,json,{headers});

}

}
