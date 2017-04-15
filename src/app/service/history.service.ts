import { Injectable } from '@angular/core';
import {ServerHost} from "../server-host";
import {Http, Response} from "@angular/http";

@Injectable()
export class HistoryService {


  private _host: string = ServerHost.ip;

  private _requestMapping: string = this._host + "/api/history";

  private _gets: string = this._requestMapping + "/gets"; //get-req param. username
  private _getsId: string = this._requestMapping + "/gets/id"; //get-req param. id article
  private _get: string = this._requestMapping + "/get"; //get-req param. id history

  constructor(private _http: Http) { }



  gets(userName: string) {
    return this._http.get(this._gets + "?username=" + userName).map((res: Response) => res.json());
  }
  getsId(id: number) {
    return this._http.get(this._getsId + "?id=" + id).map((res: Response) => res.json());
  }
get(id: number) {
    return this._http.get(this._get + "?id=" + id).map((res: Response) => res.json());
  }


}
