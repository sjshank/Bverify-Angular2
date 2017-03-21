import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppQrCodeModule } from '../shared/components/qrcode/qrcode.module';

import { RegisterComponent } from './register.component';


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
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RegisterModule { }