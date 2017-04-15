import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './component/article/article/article.component';
import { ListArticleComponent } from './component/article/list-article/list-article.component';
import { DetailArticleComponent } from './component/article/detail-article/detail-article.component';
import { FormArticleComponent } from './component/article/form-article/form-article.component';
import { ListHistoryComponent } from './component/history/list-history/list-history.component';
import { PostComponent } from './component/post/post/post.component';
import { ListPostComponent } from './component/post/list-post/list-post.component';
import { DetailPostComponent } from './component/post/detail-post/detail-post.component';
import { UserComponent } from './component/user/user/user.component';
import { LoginUserComponent } from './component/user/login-user/login-user.component';
import { FormUserComponent } from './component/user/form-user/form-user.component';
import { DetailUserComponent } from './component/user/detail-user/detail-user.component';
import { HistoryComponent } from './component/history/history/history.component';
import { DiffHistoryComponent } from './component/history/diff-history/diff-history.component';
import {ArticleService} from "./service/article.service";
import {HistoryService} from "./service/history.service";
import {UserService} from "./service/user.service";
import {RouterModule} from "@angular/router";
import {USER_ROUT} from "./rout/user-rout";
import {POST_ROUT} from "./rout/post-rout";
import {ARTICLE_ROUT} from "./rout/article-rout";
import {HISTORY_ROUT} from "./rout/history-rout";
import {AuthService} from "./service/auth.service";
import {DiffMatchPachService} from "./service/dmp.service";
import {PostService} from "./service/post.service";
import { DetailDiffHistoryComponent } from './component/history/detail-diff-history/detail-diff-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListArticleComponent,
    DetailArticleComponent,
    FormArticleComponent,
    ListHistoryComponent,
    PostComponent,
    ListPostComponent,
    DetailPostComponent,
    UserComponent,
    LoginUserComponent,
    FormUserComponent,
    DetailUserComponent,
    HistoryComponent,
    DiffHistoryComponent,
    DetailDiffHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([


      // {path: '', component:AppComponent},

      {path:'', redirectTo:'/post/list', pathMatch:'full'},




      {path: 'article', component:ArticleComponent},
      {path: 'article', component:ArticleComponent, children: HISTORY_ROUT},
      {path: 'article', component:ArticleComponent, children: ARTICLE_ROUT},


      {path: 'post', component:PostComponent},
      {path: 'post', component:PostComponent, children: POST_ROUT},

      {path: 'user', component: UserComponent},
      {path: 'user', component: UserComponent, children: USER_ROUT},

    ])

  ],
  providers: [
    ArticleService,
    HistoryService,
    UserService,
    AuthService,
    PostService,
    DiffMatchPachService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
