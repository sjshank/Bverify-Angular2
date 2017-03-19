import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import {QRCodeComponent} from 'angular2-qrcode';
import { AppQrCodeComponent } from '../utils/components/qrcode.component';

import { RegisterComponent } from './register.component';


@NgModule({
    declarations: [
        RegisterComponent,
        AppQrCodeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        QRCodeModule
    ],
    exports: [
    ]
})
export class RegisterModule { }