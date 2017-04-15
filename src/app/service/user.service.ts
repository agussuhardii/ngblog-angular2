import { Injectable } from '@angular/core';
import {ServerHost} from "../server-host";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {UserModel} from "../entity/user-model";

@Injectable()
export class UserService {

  private _host: string = ServerHost.ip;

  private _requestMapping: string = this._host+"/api/user";

  private _gets: string = this._requestMapping+"/gets"; //get all user
  private _login: string = this._requestMapping+"/login"; //request user name passwod
  private _savelogin: string = this._requestMapping+"/savelogin"; //savelogin, request username and request
  private _get: string = this._requestMapping+"/get"; //put request object userModel
  private _save: string = this._requestMapping+"/save"; //put request object userModel
  private _logout: string = this._requestMapping+"/logout"; //put request object userModel

  constructor(private http: Http) { }

  gets(){
    return this.http.get(this._gets).map((res: Response)=> res.json());
  }

  save(userModel: UserModel){
    return this.http.put(this._save, userModel).map((res: Response)=> res);
  }

  login(userName: string, password: string){
    return this.http.get(this._login+"?username="+userName+"&password="+password).map((res: Response)=> res.json());
  }

  saveLogin(userName: string, request:string, macAddressChange:string, localIpChange:string){
    return this.http.get(this._savelogin+"?username="+userName+"&request="+request+"&mac="+macAddressChange+"&ip="+localIpChange).map((res: Response)=> res);
  }

  get(userName: string){
    return this.http.get(this._get+"?username="+userName).map((res: Response)=> res.json());
  }

  logout(userName: string){
    return this.http.get(this._logout+"?username="+userName).map((res: Response)=> res)
  }
}
