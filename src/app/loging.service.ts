import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogingService {

  constructor(private httpclient:HttpClient) { }
  getInfo()
  {
    return this.httpclient.get("http://localhost:2020/apl/log");
  }
}
