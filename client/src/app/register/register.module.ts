import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppQrCodeModule } from '../shared/components/qrcode/qrcode.module';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';

import { BverifyUtil } from '../utils/bverify.util';

@NgModule({
    declarations: [
        RegisterComponent
        ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppQrCodeModule
    ],
    exports: [
    ],
    providers: [RegisterService, BverifyUtil],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RegisterModule { }