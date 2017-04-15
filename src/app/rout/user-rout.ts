import {Routes} from "@angular/router";
import {DetailUserComponent} from "../component/user/detail-user/detail-user.component";
import {LoginUserComponent} from "../component/user/login-user/login-user.component";
import {FormUserComponent} from "../component/user/form-user/form-user.component";
export const USER_ROUT: Routes = [

  {path: 'form', component:FormUserComponent},
  {path: 'login', component:LoginUserComponent},
  {path: ':id', component:DetailUserComponent},

];
