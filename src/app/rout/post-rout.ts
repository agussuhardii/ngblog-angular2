import {Routes} from "@angular/router";
import {ListPostComponent} from "../component/post/list-post/list-post.component";
import {DetailPostComponent} from "../component/post/detail-post/detail-post.component";
export const POST_ROUT: Routes = [

  {path: 'list', component:ListPostComponent},
  {path: ':id', component:DetailPostComponent}

];
