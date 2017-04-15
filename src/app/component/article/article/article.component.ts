import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {ArticleService} from "../../../service/article.service";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  currentUser:string = localStorage.getItem("currentUser");
  article:any;
  status:string;

  constructor(private router: Router,
              private service: ArticleService
  ) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser") == null){
      this.router.navigateByUrl("/user/login");
    }else {
      this.gets("private");
      this.gets("draft");
      this.gets("yourShare");
      this.gets("trash");
      this.gets("published");
      this.gets("null");
    }
  }

  //count article leng
  gets(status:string){ //create methode get to call data from database
    let result: Observable<Response> = this.service.gets(this.currentUser, status);
    return result.subscribe(
      (data)=> {
        this.article = data;

        if(status=='private'){
          this._private=this.article.length;
        }else if(status=='draft'){
          this._draft=this.article.length;
        }else if(status=='yourShare'){
          this._yourShare=this.article.length;
        }else if(status=='trash'){
          this._trash=this.article.length;
        }else if(status=='published'){
          this._published=this.article.length;
        }else if(status=='null'){
          this._all=this.article.length;
        }
      },
      (err)=> {
        this._all = 0;
        this._published = 0;
        this._private= 0;
        this._draft= 0;
        this._yourShare =0;
        this._trash=0;
      },
      ()=>{}
    )
  }






  _all;
  _published;
  _private;
  _draft;
  _yourShare;
  _trash;




}
