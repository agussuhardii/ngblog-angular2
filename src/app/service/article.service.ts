import { Injectable } from '@angular/core';
import {ServerHost} from "../server-host";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {ArticleModel} from "../entity/article-model";

@Injectable()
export class ArticleService {

  private _host: string = ServerHost.ip;

  private _requestMapping: string = this._host + "/api/article";

  private _gets: string = this._requestMapping + "/gets"; //get-req param. username, status
  private _share: string = this._requestMapping + "/share"; //get-req param. username
  private _get: string = this._requestMapping + "/get"; //get-req param. id
  private _save: string = this._requestMapping + "/save"; //put-req object. article
  private _onedit: string = this._requestMapping + "/onedit"; //get-req param. id, username
  private _accessuser: string = this._requestMapping + "/accessuser"; //get-param. article, id, access(true/false)
  private _restore: string = this._requestMapping + "/restore"; //get-req param. id, article, username

  constructor(private _http: Http) {
  }


  gets(userName: string, status: string) {
    return this._http.get(this._gets + "?username=" + userName + "&status=" + status).map((res: Response) => res.json());
  }

  share(userName: string) {
    return this._http.get(this._share + "?username=" + userName).map((res: Response) => res.json());
  }

  get(id: string) {
    return this._http.get(this._get + "?id=" + id).map((res: Response) => res.json());
  }

  save(articleModel: ArticleModel) {
    return this._http.put(this._save, articleModel).map((res: Response) => res);
  }

  onEdit(id: string, userName: string) {
    return this._http.get(this._onedit + "?id=" + id + "&username=" + userName).map((res: Response) => res);
  }

  accessUser(article: number, userName: string, access: string) {
    return this._http.get(this._accessuser + "?article=" + article + "&user=" + userName + "&access=" + access).map((res: Response) => res.json());
  }

  restore(id: string, status: string) {
    return this._http.get(this._restore+"?id="+id+"&status="+status).map((res: Response) => res.json());
  }

}
