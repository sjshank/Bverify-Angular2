import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LocalDataSource } from 'ng2-smart-table';
import { IMyOptions, IMyDateModel } from 'mydatepicker';

import { ProductRegisterService } from './register.service';
import { DATEPICKERCONST } from '../../../config/app.constants';
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
  data: LocalDataSource;

  private _alive = true;
  private dpOptions: IMyOptions = DATEPICKERCONST.options;

  settings = {
    columns: {
      pName: {
        title: 'Product Name'
      },
      pWeight: {
        title: 'Weight'
      },
      manufacturingDate: {
        title: 'Manufacturing Date'
      }
    }
  };


  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
    private _registerService: ProductRegisterService) {
    this._getProductList();
  }

  ngOnInit() {
    this.rForm = this._fb.group({
      'pName': ['', Validators.required],
      'pNumber': ['', Validators.required],
      'manufacturingDate': ['', Validators.required],
      'pWeight': ['', Validators.required],
      'pQuantity': ['', Validators.required],
      //'pFile': ['', Validators.required]
    });
  }

  registerProduct(value): void {
    let model = value;
    model['manufacturingDate'] = value['manufacturingDate']['formatted'];

    this._registerService.register(model)
      .takeWhile(() => this._alive)
      .subscribe(
      data => {
        console.log(data);
        this._getProductList();
      },
      error => {
        console.log("error", error);
      }
      )
  };

  private _getProductList(): any {
    this._registerService.list()
      .takeWhile(() => this._alive)
      .subscribe(
      response => {
        this.data = new LocalDataSource(response.list);
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
