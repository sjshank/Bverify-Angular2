import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MaterialRegisterService } from './register.service';
import "rxjs/add/operator/takeWhile";

@Component({
  selector: 'app-register-material',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterMaterialComponent implements OnInit {
  title: string = 'REGISTER RAW MATERIAL';
  subTitle: string = 'REGISTERED MATERIALS'
  rForm: FormGroup;
  private _alive = true;
  data: any[];

  settings = {
    columns: {
      ID: {
        title: 'ID'
      },
      mName: {
        title: 'Material Name'
      },
      mWeight: {
        title: 'Weight'
      },
      productionDate: {
        title: 'Production Date'
      }
    }
  };



  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
    private _registerService: MaterialRegisterService) { 
      this._getMaterialList();
    }

  ngOnInit() {
    this.rForm = this._fb.group({
      'mName': ['', Validators.required],
      'mNumber': ['', Validators.required],
      'productionDate': ['', Validators.required],
      'mWeight': ['', Validators.required],
      'mQuantity': ['', Validators.required],
      //'mFile': ['', Validators.required]
    });
    
  };

  registerMaterial(value): void {
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

  private _getMaterialList(): any {
    this._registerService.list()
      .takeWhile(() => this._alive)
      .subscribe(
      response => {
        this.data = response.list;
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
