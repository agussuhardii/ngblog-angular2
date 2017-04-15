import {Routes, RouterModule} from "@angular/router";
import {ArticleComponent} from "./component/article/article/article.component";
import {ARTICLE_ROUT} from "./rout/article-rout";
import {HISTORY_ROUT} from "./rout/history-rout";
import {PostComponent} from "./component/post/post/post.component";
import {POST_ROUT} from "./rout/post-rout";
import {UserComponent} from "./component/user/user/user.component";
import {USER_ROUT} from "./rout/user-rout";
import {AppComponent} from "./app.component";
const APP_ROUT: Routes = [

  // {path: '', component:AppComponent},

  {path: 'article', component:ArticleComponent},
  {path: 'article', component:ArticleComponent, children: HISTORY_ROUT},
  {path: 'article', component:ArticleComponent, children: ARTICLE_ROUT},


  {path: 'post', component:PostComponent},
  {path: 'post', component:PostComponent, children: POST_ROUT},

  {path: 'user', component: UserComponent},
  {path: 'user', component: UserComponent, children: USER_ROUT},


];

export const  ROUTING = RouterModule.forRoot(APP_ROUT);
