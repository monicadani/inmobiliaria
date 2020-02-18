import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription} from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo: UserModel;
  userLogged:boolean=(this.userInfo !=undefined) ? this.userInfo.isLogged: false;
  userName: String;

  subscription: Subscription; 

  constructor(private secService: SecurityService) { }

  ngOnInit() {
    this.verifyUserSession();
  }

  verifyUserSession(){
    this.subscription= this.secService.getUserInfo().subscribe(user =>{
      this.userInfo= user;
      this.userLogged= user.isLogged;
      this.
    });
  }

}