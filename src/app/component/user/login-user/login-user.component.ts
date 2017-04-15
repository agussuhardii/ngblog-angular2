import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {UserModel} from "../../../entity/user-model";
import {AuthService} from "../../../service/auth.service";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {Router} from "@angular/router";
import {userInfo} from "os";
import {ClientInfo} from "../../../client-info";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  newDate:any = new Date();

  user: any = new UserModel(null, null, null, null, null, null, null, null);
  _saveLogin: any = new UserModel(null, null, null, null, null, null, null, null);
  trueLogout:boolean;
  loginUserName:string;

  info:string;
  startLogin:Date;

  constructor(private service:UserService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser") != null){
      this.router.navigateByUrl("/article/list/null");
    }
  }

  login(user:string, pass:string) {
    let result: Observable<Response> = this.service.login(user, pass);
    return result.subscribe(
      (data) => {
        this.user = data;
      },
      (err) => {
        console.log(err);
        this.info = "Login failed";
      },
      () => {
        if ( this.user.macAddressChange==ClientInfo.macAddressChange && this.user.login==true){
          localStorage.setItem("currentUser", this.user.userName);
          location.reload();
        }else if (this.user.login==true ){
          this.loginUserName = this.user.userName;
          this.info = this.loginUserName+"on IP "+this.user.localIpChange;
          this.startLogin = this.user.startLogin;

          if ((this.user.startLogin - this.newDate) < 777777 ) {
            this.trueLogout = true;
          }
        }else if(this.user.login==false){
          this.saveLogin(this.user.userName);
        }
      }
    );
  }


  saveLogin(userName:string){
    let result: Observable<Response> = this.service.saveLogin(userName, "login", ClientInfo.macAddressChange, ClientInfo.localIpChange);
    return result.subscribe(
      (data) => {
        this._saveLogin = data;
      },
      (err) => { },
      () => {
        localStorage.setItem("currentUser", this.user.userName);
        location.reload();
      }
    );
  }

  saveLogout(userName:string){
    let result: Observable<Response> = this.service.saveLogin(userName, "logout", ClientInfo.macAddressChange, ClientInfo.localIpChange);
    return result.subscribe(
      (data) => {
        this._saveLogin = data;
      },
      (err) => { },
      () => {
        this.info = this.loginUserName+" has been logout..."
        this.trueLogout=false;
      }
    );
  }

}
