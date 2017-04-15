import {Component, OnInit, OnDestroy} from '@angular/core';
import {ArticleService} from "../../../service/article.service";
import {Observable, Subscription} from "rxjs";
import {Response} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit, OnDestroy {

  userName = localStorage.getItem("currentUser");//get user active from loacal storeag
  article:any; //for create object

  subsc: Subscription; //for url parameter

  constructor(
    private service: ArticleService, //services url
    private activRoute: ActivatedRoute //for router url parameter
  ) {
  }



  ngOnInit() {
    this.onChange(); //call methode
  }

  ngOnDestroy() {
  }

  onChange(){ //create methode on change to change values page
    this.subsc = this.activRoute.params.subscribe(
      (param: any)=> {
        let status = param['status'];
        this.gets(status);
        //console.log(status)
      }
    )
  }

  gets(status){ //create methode get to call data from database
    let result: Observable<Response> = this.service.gets(this.userName, status);
    return result.subscribe(
      (data)=> {this.article = data;
      },
      (err)=> {},
      ()=>{}
    )
  }

}
