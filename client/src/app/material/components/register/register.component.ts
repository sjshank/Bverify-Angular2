import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-material',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterMaterialComponent implements OnInit {
  title: string = 'REGISTER RAW MATERIAL';
  rForm : FormGroup;

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];


  
constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.rForm = this._fb.group({
      'mName': ['', Validators.required],
      'mNumber': ['', Validators.required],
      'productionDate': ['', Validators.required],
      'mWeight': ['', Validators.required],
      'mColor': ['', Validators.required],
      'mFile': ['', Validators.required]
    });
  }

  registerMaterial(value): void {
    console.log(value);
  }

}
