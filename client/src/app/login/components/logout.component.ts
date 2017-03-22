import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
    selector: 'app-logout',
    template: ''
})
export class LogoutComponent implements OnInit {

    constructor(private _router: Router, private _loginService: LoginService) { }

    ngOnInit() {
        this._loginService.logoutUser();
        this._router.navigate(['/login']);
    }

}
