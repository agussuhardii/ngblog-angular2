import {Component, OnInit, OnDestroy} from '@angular/core';
import {HistoryModel} from "../../../entity/history-model";
import {Subscription, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HistoryService} from "../../../service/history.service";
import {Response} from "@angular/http";
import {ArticleModel} from "../../../entity/article-model";
import {UserModel} from "../../../entity/user-model";

@Component({
  selector: 'app-detail-diff-history',
  templateUrl: './detail-diff-history.component.html',
  styleUrls: ['./detail-diff-history.component.css']
})
export class DetailDiffHistoryComponent implements OnInit, OnDestroy {

  subsc: Subscription; //subscribe to url
  id;


  user: any = new UserModel(null, null, null, null, null, null, null, null);
  article: any = new ArticleModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null, this.user, this.user, null);
  history: any = new HistoryModel(null, null, null, null, null, null, null, null, null, null, null, null, null, this.article);

  constructor(private activRout: ActivatedRoute,
              private service: HistoryService) {
    this.subsc = activRout.params.subscribe(
      (param) => this.id = param['id']
    )
  }

  ngOnInit() {
    this.getId();
  }

  ngOnDestroy() {
  }


  //get data by kode from url parameter
  getId() {
    let result: Observable<Response> = this.service.get(this.id);
    return result.subscribe(
      (data) => {
        this.history = data;

      },
      (err) => {
      },
      () => {

      }
    );
  }

}
