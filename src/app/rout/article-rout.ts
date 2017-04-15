import {Routes} from "@angular/router";
import {ListArticleComponent} from "../component/article/list-article/list-article.component";
import {FormArticleComponent} from "../component/article/form-article/form-article.component";
import {DetailArticleComponent} from "../component/article/detail-article/detail-article.component";
export const ARTICLE_ROUT: Routes = [

  {path: 'list/:status', component:ListArticleComponent},
  {path: 'form', component:FormArticleComponent},
  {path: 'form/:id', component:FormArticleComponent},
  {path: ':id', component:DetailArticleComponent}
];
