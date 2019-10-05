import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  authenticate(email,password){
    const headers=new HttpHeaders({Authorization:'Basic '+btoa(email+':'+password) });
    return this.http.get("http://localhost:2020/apl/validateuser",{headers}).pipe(
      map(data=> {
        sessionStorage.setItem('token', btoa( email+':' + password));
      }
      ));

  }
}
