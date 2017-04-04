import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

import { ProductShipService } from './ship.service';
import { DROPDOWNCONSTANT } from '../../../config/app.constants';
import "rxjs/add/operator/takeWhile";

@Component({
  selector: 'app-product-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.less']
})
export class ProductShipComponent implements OnInit {

  title: string = 'SHIP PRODUCT';
  sForm: FormGroup;
  selectedRetailer: number[];
  retailerList: IMultiSelectOption[];
  ddSettings: IMultiSelectSettings = DROPDOWNCONSTANT.ddSettings;

  ddTexts: IMultiSelectTexts = {
    defaultTitle: 'Select Retailer'
  };

  public products: any[] = [
    { "id": 1, "name": "Table" },
    { "id": 2, "name": "Chair" },
    { "id": 3, "name": "Light" }
  ];


  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
    private _shipService: ProductShipService) {
  }

  ngOnInit() {
    this.retailerList = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 1' },
    ];
    this.sForm = this._fb.group({
      'pName': ['', Validators.required],
      'shipQuantity': ['', Validators.required],
      'selectedRetailer': [[], Validators.required]
      //'mFile': ['', Validators.required]
    });
  };

  shipProduct(model): void {
    console.log(model);
  }

}
