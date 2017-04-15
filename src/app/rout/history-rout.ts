import {Routes} from "@angular/router";
import {ListHistoryComponent} from "../component/history/list-history/list-history.component";
import {DiffHistoryComponent} from "../component/history/diff-history/diff-history.component";
import {DetailDiffHistoryComponent} from "../component/history/detail-diff-history/detail-diff-history.component";
export const HISTORY_ROUT: Routes = [

  {path: 'diff/list', component:ListHistoryComponent},
  {path: 'diff/detail/:id', component:DetailDiffHistoryComponent},
  {path: 'diff/:id', component:DiffHistoryComponent},

];
