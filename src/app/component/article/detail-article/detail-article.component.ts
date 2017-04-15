import {Component, OnInit, OnDestroy} from '@angular/core';
import {Response} from "@angular/http";
import {Observable, Subscription} from "rxjs";
import {UserModel} from "../../../entity/user-model";
import {ArticleModel} from "../../../entity/article-model";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../../service/article.service";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit, OnDestroy {

  currentUser:string=localStorage.getItem("currentUser");

  subsc: Subscription; //subscribe to url
  id;
  _listUser: any;
  check: string;

  user: any = new UserModel(null, null, null, null, null, null, null, null);
  article: any = new ArticleModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null, this.user, null, null);


  constructor(private activRout: ActivatedRoute,
              private service: ArticleService,
              private userService: UserService,
              private router: Router
  ) {
    this.subsc = activRout.params.subscribe((param) => this.id = param['id']);
  }

  ngOnInit() {
    this.getIdArticle();
    this.listUser();
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

  listUser() {
    let result: Observable<Response> = this.userService.gets();
    return result.subscribe(
      (data) => {
        this._listUser = data;
      },
      (err) => {
      },
      () => {
      }
    );
  }


  userShare(checkValue: boolean, userName) {
    if (checkValue == true) {
      this.check = "true";
    }
    else if (checkValue == false) {
      this.check = "false";
    }

    //console.log(userName)
    let result: Observable<Response> = this.service.accessUser(this.article.id, userName, this.check)
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

//setEdit Prosess
  articleEdit:any =new ArticleModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  goEdit(){
    let result: Observable<Response> = this.service.onEdit(this.id, this.currentUser);
    return result.subscribe(
      (data) => {
        this.articleEdit = data;
      },
      (err) => {
      },
      () => {
        this.router.navigateByUrl('/article/form/'+this.id);
      }
    );
  }




restore:any;
  //restore
  setRestore(to:string) {
    let result: Observable<Response> = this.service.restore(this.id, to)
    return result.subscribe(
      (data) => {
        this.restore = data;
      },
      (err) => {
      },
      () => {
        this.router.navigateByUrl('/article/list/null');
      }
    );



  }


















}
