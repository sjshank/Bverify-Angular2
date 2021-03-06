import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { BverifyUtil } from '../utils/bverify.util';
import { UserService } from '../services/user.service';
import { APIURL } from '../config/app.constants';
/*import { IUser } from '../models/user';*/

@Injectable()
export class LoginService {
    private userObject: any;

    constructor(private _http: Http, private _bverifyUtil: BverifyUtil, private _userService: UserService) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userObject = currentUser && currentUser.token;
    };

    loginUser(user: Object): Observable<boolean> {
        return this._http.post(`${APIURL.login}`, user)
            .map((response: Response) => {
                let user = response.json() && response.json().user;
                if (user){
                    this.userObject = user;
                    this._userService.setUser(this.userObject);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                }else{
                    return false;
                }            
            })
            .catch(this._bverifyUtil.handleError);
    };

    logoutUser():void{
        this.userObject = null;
        this._userService.setUser(null);
        localStorage.removeItem('currentUser');
    };
}