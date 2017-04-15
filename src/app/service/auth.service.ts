import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
/**
 * Created by agussuhardi on 03/12/16.
 */
export class AuthService {




  _userValid: string;// = "agus";
  _passwordValid: string;// = "123";



  get sudahLogin(): boolean {
    return localStorage.getItem("currentUser") != null;
  }

  login(username: string, password: string) {
    console.log("coba : "+this._userValid);

    if (username == this._userValid && password == this._passwordValid) {
      localStorage.setItem("currentUser", username);
      location.reload();
      // console.log("login sukses...")
    } else {
      console.log("user/password salah")
    }
  }

  get currentUser() {
    return localStorage.getItem("currentUser");
  }

  logout() {
    localStorage.removeItem("currentUser")
  }



}
