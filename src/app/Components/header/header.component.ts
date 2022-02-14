import { AuthserviceService } from './../../Services/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userFlag:boolean;
userName:string='';
isLoggedIn = false
  constructor(private AuthServc:AuthserviceService) {
    this.userFlag=this.AuthServc.IsUserLogged;
   }

  ngOnInit(): void {
    this.isLoggedIn = this.AuthServc.isLogedIn
    this.AuthServc.getLogStatus().subscribe(state=>this.userFlag=state)
    this.AuthServc.getUserName().subscribe(name=>{
      this.userName=name;
    })
  }
  logOut(){
    this.AuthServc.logOut();
    this.userFlag=this.AuthServc.IsUserLogged;
    }

}
