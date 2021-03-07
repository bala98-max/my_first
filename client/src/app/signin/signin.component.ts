import { Component, OnInit, ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Observable }from 'rxjs'


import { SigninService } from '../shared/signin.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  passError:boolean;
  usnameError:boolean;

  username_pattern= /^[a-zA-Z\-]+$/;
  password_pattern = /[a-zA-z\d-]{6,12}/;

  @ViewChild('signinForm') signinForm : NgForm;

  constructor(private Signin : SigninService) { }

  ngOnInit(): void {
  }


  Onsubmit(){
    this.Signin.SigninUser.username = this.signinForm.value.username;
    this.Signin.SigninUser.password = this.signinForm.value.password;

    this.Signin.postfun(this.Signin.SigninUser).subscribe((res)=>{
      //validation using res.length
      if(res.length == 31){

            this.passError= true;

            setTimeout(()=>{
              this.passError = false;
            },3000)

      }else if(res.length == 16){

          this.usnameError = true;

          setTimeout(()=>{
            this.usnameError =false
          },3000)

      }else{
        window.location.href= 'http://localhost:4200/users'
      }
    })
  }

}
