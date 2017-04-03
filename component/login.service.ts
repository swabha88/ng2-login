import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, QueryEncoder} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate } from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './login.model';

// import * as xHRMGlobals from '../common/xHRMGlobal.service';

@Injectable()

export class AuthService {
  _tokenUrl: string;
  _accountUrl: string;
  _token: string;
  user: User;
  private loggedIn = false;
  vm: any = this;

  constructor(private _http: Http, private router: Router) {
    // this._tokenUrl = ConfigKeys.tokenEndPoint;
    // this._accountUrl = ConfigKeys.apiEndPoint + 'Account';
    // this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(user) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    var data = "userName=" + user.email +
      "&password=" + user.password +
      "&grant_type=password";


    return this._http.post(this._tokenUrl, data, options)
      .map(
      response => {
        if (response.status == 200) {
          localStorage.setItem('id_token', response.json().access_token);

          // (<any>xHRMGlobals).username = response.json().username;
          // (<any>xHRMGlobals).isAdmin = response.json().rolename == 'Admin';

          localStorage.setItem('user_name', response.json().userName);
          localStorage.setItem('user_role', response.json().rolename);
          this.vm.getAuthDetails().subscribe(res => res);
        }
        return response;
      },
      error => {
        // alert(error.text());
        console.log(error.text());
      }
      );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_details');
    localStorage.removeItem('user_role');
    //this.loggedIn = false;
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);

    return Observable.throw(error.json());
    // return Observable.throw(error.json().error || 'Server error');
  }

  private mapData(res: Response) {
    if (res != null)
      return res.json();
  }
}