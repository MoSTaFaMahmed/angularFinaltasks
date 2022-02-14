import { AuthserviceService } from './../../Services/authservice.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userFlag:boolean=false;
  constructor(private userAuthServc:AuthserviceService,private location:Location) { }

  ngOnInit(): void {
    }
    logIn(userName:string,pass:string){
      this.userAuthServc.logIn(userName,pass);
      this.userFlag=this.userAuthServc.IsUserLogged;
      this.location.back()
    }

}
