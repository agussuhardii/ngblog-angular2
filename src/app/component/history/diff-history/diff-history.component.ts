import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {UserModel} from "../../../entity/user-model";
import {HistoryModel} from "../../../entity/history-model";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../service/post.service";
import {Response} from "@angular/http";
import {HistoryService} from "../../../service/history.service";

@Component({
  selector: 'app-diff-history',
  templateUrl: './diff-history.component.html',
  styleUrls: ['./diff-history.component.css']
})
export class DiffHistoryComponent implements OnInit, OnDestroy {

  subsc: Subscription; //subscribe to url
  id;

  history:any;

  constructor(private activRout: ActivatedRoute,
              private service: HistoryService
  ) {
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
    let result: Observable<Response> = this.service.getsId(this.id);
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
