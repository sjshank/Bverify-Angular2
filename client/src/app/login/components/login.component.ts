import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../login.service';
import "rxjs/add/operator/takeWhile";

@Component({
  selector: 'app-login',
  templateUrl: '../login.component.html',
  styleUrls: ['../login.component.less']
})
export class LoginComponent implements OnInit {
  private _alive = true;
  title: string = 'Login';
  lForm: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
    private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.logoutUser();
    this.lForm = this._fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  doLogin(value): void {
    this._loginService.loginUser(value)
      .takeWhile(() => this._alive)
      .subscribe(
      data => {
        /*console.log(data);
        this.data = JSON.stringify(value);*/
        if (data) {
          this._router.navigate(['/landing']);
        }
      },
      error => {
        console.log("error", error);
      }
      )
    this._router.navigate(['/landing']);
  };

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._alive = false;
  }

}
