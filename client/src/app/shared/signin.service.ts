import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';


import { Signin } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  SigninUser : Signin = {
        username: '',
        password: '',
  }

 constructor(private http : HttpClient) { }

readonly baseURL = 'http://localhost:9000/signin'

 postfun(user: Signin):Observable<any>{
    return this.http.post(this.baseURL,user)
  }

}
