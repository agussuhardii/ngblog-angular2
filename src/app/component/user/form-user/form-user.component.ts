import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import {UserModel} from "../../../entity/user-model";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {ClientInfo} from "../../../client-info";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  res: string = null;

  user: any = new UserModel(null, null, null, null,null, null,ClientInfo.macAddressChange, null);
  oldUser: any = null;

  constructor(private service: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  register(userName: string, password: string, rePassword: string) {
    let result: Observable<Response> = this.service.get(userName);
    return result.subscribe(
      (data) => {this.oldUser = data},
      (err) => {
        if (password != rePassword) {
          this.res = "password do not match"
        } else {
          this.save();
        }
      },
      () => {
        if (this.oldUser != null) {
          this.res = "user has been created";
        }
      }
    );
  }

  save() {
    let save: Observable<Response> = this.service.save(this.user);
    save.subscribe(
      (data) => {
        this.user = data
      },
      (err) => {
        this.res = "Register Failed";
      },
      () => {
        this.res = "Register Succsess";
        this.router.navigateByUrl("/user/login");
      });
  }

}
