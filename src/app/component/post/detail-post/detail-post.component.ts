import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {ArticleModel} from "../../../entity/article-model";
import {ActivatedRoute} from "@angular/router";
import {Response} from "@angular/http";
import {PostService} from "../../../service/post.service";
import {UserModel} from "../../../entity/user-model";

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit, OnDestroy {

  subsc: Subscription; //subscribe to url
  id;

  user:any = new UserModel(null, null, null, null, null, null, null, null);
  article: any = new ArticleModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null, this.user, null, null);


  constructor(private activRout: ActivatedRoute,
              private service: PostService
  ) {
    this.subsc = activRout.params.subscribe(
      (param) => this.id = param['id']
    )
  }

  ngOnInit() {
    this.getIdArticle();
  }

  ngOnDestroy() {
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
