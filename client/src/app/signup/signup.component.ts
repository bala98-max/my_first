import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { from } from 'rxjs';
import{ Observable }from 'rxjs'


import { UserService }from '../shared/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ UserService ]
})
export class SignupComponent implements OnInit {
  show:boolean;
  name_pattern = new RegExp( /^[a-zA-Z\-]+$/);
  email_pattern = new RegExp( /(^[a-z\d-]+)@([a-z]+)\.([a-z]{2,6})$/ )
  password_pattern = /[a-zA-z\d-]{6,12}/;
  mobile_p = /^(0|[+91]{3})?[7-9][0-9]{9,12}$/;



  @ViewChild('signupForm') signupForm :NgForm;

  constructor(private userService : UserService) {

  }

  ngOnInit(): void {

  }
  Onsubmit(){
    this.userService.NewUser.username = this.signupForm.value.username;
    this.userService.NewUser.email= this.signupForm.value.email;
    this.userService.NewUser.password = this.signupForm.value.password;
    this.userService.NewUser.mobile = this.signupForm.value.mobile;
    this.userService.postfun(this.userService.NewUser).subscribe((res)=>{
        if(res == 'username is not available'){
            this.show = true;
            setTimeout(()=>{
              this.show = false;
            },3000)
        }else{
              alert ('Signup SuccessFully...!');
              window.location.href ="http://localhost:4200/";
        }
    })

  }


}
