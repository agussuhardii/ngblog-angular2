import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from "./service/user.service";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {UserModel} from "./entity/user-model";
import {Router} from "@angular/router";
import {userInfo} from "os";
import {ClientInfo} from "./client-info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  whatTime = Observable.interval(1000).map(x => new Date()).share();

  currentUser:string = localStorage.getItem("currentUser");
  user:any = new UserModel(null, null, null,null, null, null, null, null);
  constructor(
    private service: UserService,
    private router: Router
  ){

  }

  ngOnInit() {
      if(!this.currentUser) {
        this.router.navigateByUrl('/post/list');
      }else {
        this.getUserInfo();
        }
  }


  logout(){
    let result: Observable<Response> = this.service.saveLogin(this.currentUser, "logout", ClientInfo.macAddressChange, ClientInfo.localIpChange);
    return result.subscribe(
      (data)=> {this.user = data;
      },
      (err)=> {},
      ()=>{
        localStorage.removeItem("currentUser");
        location.reload();
      }
    )
  }


_user:any;
//get user info login
  getUserInfo() {
    let result: Observable<Response> = this.service.get(this.currentUser);
    return result.subscribe(
      (data) => {this._user = data},
      (err) => {
        this.router.navigateByUrl('/article/list/null');
      },
      () => {
        if(this._user.macAddressChange==ClientInfo.macAddressChange && this._user.login==true){
          this.router.navigateByUrl('/article/list/null');
        }else{
          localStorage.removeItem("currentUser");
        }
      }
    );
  }



}



