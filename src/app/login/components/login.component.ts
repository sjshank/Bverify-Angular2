import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../login.component.html',
  styleUrls: ['../login.component.less']
})
export class LoginComponent implements OnInit {
  title: string = 'Login';
  lForm: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.lForm = this._fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  doLogin(value): void {
    console.log(value);
    this._router.navigate(['/landing']);
  }

}
