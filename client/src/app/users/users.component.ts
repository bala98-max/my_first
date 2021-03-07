import { ViewChild } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { from,Observable } from 'rxjs';
import { NgForm }from '@angular/forms'


import{ FetchService }from '../shared/fetch.service';
import { UpdateService } from '../shared/update.service'
import { Update } from '../shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ FetchService ]
})
export class UsersComponent implements OnInit, OnDestroy{


  name;


@ViewChild(MatPaginator,{static: true})paginator: MatPaginator

@ViewChild('updateForm') UpdateForm: NgForm;


  data : Array<any>;
  datas;
  totalRecords: Number
  page: Number = 1

  showw:boolean;

  //mo
  showModal: boolean;
  submitted = false;


  constructor(private fetch: FetchService,private  update : UpdateService ) {
    this.data = new Array<any>();

   }

   show(x)
   {
     this.showModal = true; // Show-Hide Modal Check
     this.name = x.UserName

   }

   //Bootstrap Modal Close event
   hide()
   {
     this.showModal = false;
   }

  ngOnInit(): void {
    this.fetch.fetchdata().subscribe((data)=>{
      this.data = data
      this.totalRecords = this.data.length;
    })
  }
  Onsubmit(form:NgForm) {

    this.update.Updateuser.username = form.value.username;
    this.update.Updateuser.email = form.value.email;
    this.update.Updateuser.mobile = form.value.mobile;
    this.submitted = true;
    // stop here if form is invalid
    if (form.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }

    this.update.putfun(this.update.Updateuser).subscribe((res)=>{
          if(res == 'invalid' ){
            this.showw = true;
            setTimeout(()=>{
              this.showw =false
            },3000)
          }else{
            alert('Update SuccessFully....!');

            window.location.href = "http://localhost:4200/users"
          }
    })


}


  ngOnDestroy(){
    console.log('component destroy')
  }

OnDelete(data){
  this.fetch.deletedata(data).subscribe((res)=>{
    alert(' Successfully deleted..!')
  })
}

}
