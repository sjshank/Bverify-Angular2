import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RegisterService } from './register.service';

import "rxjs/add/operator/takeWhile";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  title: string = 'Register';
  rForm: FormGroup;
  generateQR: boolean = false;
  data: string = '';
  private _alive: boolean = true;

  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
    private _registerService: RegisterService) { }

  ngOnInit() {
    this.rForm = this._fb.group({
      'userName': ['', Validators.required],
      /*'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],*/
      'password': ['', Validators.required],
      'type': ['', Validators.required]
    });
  }

  doRegistration(value): void {
    this.generateQR = !this.generateQR ? !this.generateQR : true;
    this._registerService.registerUser(value)
      .takeWhile(() => this._alive)
      .subscribe(
      data => {
        /*console.log(data);
        this.data = JSON.stringify(value);*/
        if(data){
          this._router.navigate(['/landing']);
        }
      },
      error => {
        console.log("error", error);
      }
      )
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._alive = false;
  }

}
