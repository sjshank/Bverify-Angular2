import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-logout',
    template: ''
})
export class LogoutComponent implements OnInit {

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this._router.navigate(['/login']);
    }

}
