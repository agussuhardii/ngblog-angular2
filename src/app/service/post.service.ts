import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {ServerHost} from "../server-host";

@Injectable()
export class PostService {

  constructor(private http: Http) { }


  private _host: string = ServerHost.ip;

  private _requestMapping: string = this._host+"/api/post";

  private _gets: string = this._requestMapping+"/gets"; //get all user
  private _get: string = this._requestMapping+"/get"; //get By Id


  gets(){
    return this.http.get(this._gets).map((res: Response)=> res.json());
  }
  get(id:string){
    return this.http.get(this._get+"?id="+id).map((res: Response)=> res.json());
  }
}
