import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductRegisterService } from './register.service';
import "rxjs/add/operator/takeWhile";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterProductComponent implements OnInit {
  title: string = 'REGISTER NEW PROUDCT';
  subTitle: string = 'REGISTERED PRODUCTS'
  rForm: FormGroup;
  private _alive = true;

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    // ... list of items

    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];


  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
    private _registerService: ProductRegisterService) { }

  ngOnInit() {
    this.rForm = this._fb.group({
      'pName': ['', Validators.required],
      'pNumber': ['', Validators.required],
      'manufacturingDate': ['', Validators.required],
      'pWeight': ['', Validators.required],
      'pColor': ['', Validators.required],
      //'pFile': ['', Validators.required]
    });
  }

  registerProduct(value): void {
    console.log(value);
    this._registerService.register(value)
      .takeWhile(() => this._alive)
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("error", error);
      }
      )
  };

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._alive = false;
  }

}
