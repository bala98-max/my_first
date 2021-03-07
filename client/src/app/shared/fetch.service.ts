import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http : HttpClient) { }

    readonly baseURL = 'http://localhost:9000/signup/'

    fetchdata():Observable<any>{
      return this.http.get(this.baseURL)
  }

  deletedata(user):Observable<any>{
    return this.http.delete(this.baseURL+ user)
  }



}
