import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import{ User } from '../shared/user.model';




@Injectable({
  providedIn: 'root'
})

export class UserService {
  NewUser: User = {
    username: '',
    email: '',
    mobile:'',
    password: ''
  }

  readonly baseURL = "http://localhost:9000/signup"

  constructor(private http : HttpClient) {}

  postfun(user: User):Observable<any>{
   return this.http.post(this.baseURL, user)
  }

}
