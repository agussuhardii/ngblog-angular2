import { Component, OnInit } from '@angular/core';
import {ArticleModel} from "../../../entity/article-model";
import {Observable, Subscription} from "rxjs";
import {Response} from "@angular/http";
import {ArticleService} from "../../../service/article.service";
import {UserModel} from "../../../entity/user-model";
import {ClientInfo} from "../../../client-info";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css']
})
export class FormArticleComponent implements OnInit {

  warning:string;

  subsc: Subscription;
  id;

  user:any = new UserModel(localStorage.getItem("currentUser"), null, null, null, null, null, null, null);

  article:any = new ArticleModel(
    null,
    null,
    null,
    "published",
    1,
    ClientInfo.userName,
    ClientInfo.localIpChange,
    ClientInfo.publicIpChange,
    ClientInfo.operatingSystemChange,
    "new Article",
    ClientInfo.hostNameChange,
    ClientInfo.browserChange,
    new Date,
    new Date,
    this.user,
    null,
    null
  );


  constructor(
    private activRout: ActivatedRoute,
    private service: ArticleService,
    private router: Router
  ) {
    this.subsc = activRout.params.subscribe((param) => this.id = param['id']);
  }

  ngOnInit() {
    if (this.id){
      this.getIdArticle();
    }
  }

  save(){
    let save: Observable<Response> = this.service.save(this.article);
    save.subscribe(
      (data)=> {this.article = data},
      (err)=> {this.warning = "Your has been logout, Please Login to access this pages"},
      ()=>{this.router.navigateByUrl("/article/list/")});
  }


  //get data by kode from url parameter
  getIdArticle() {
    let result: Observable<Response> = this.service.get(this.id);
    return result.subscribe(
      (data) => {
        this.article = data;
      },
      (err) => {
      },
      () => {
      }
    );
  }
}
