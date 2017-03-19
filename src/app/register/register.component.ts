import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.rForm = this._fb.group({
      'userName': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  doRegistration(value): void {
    this.generateQR = !this.generateQR ? !this.generateQR : true;
    this.data = JSON.stringify(value);
  }


}
