import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient,HttpHeaders}from '@angular/common/http'

import { Update } from '../shared/user.model'

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  Updateuser:Update ={
      username:"",
      email:"",
      mobile:"",

  }

  readonly baseURL = 'http://localhost:9000/signup/'

  constructor( private http : HttpClient) { }

  putfun(res: Update):Observable<any>{

      return this.http.put(this.baseURL+res.username,res)
  }
}
