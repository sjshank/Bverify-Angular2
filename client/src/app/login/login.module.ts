import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';


@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
    ]
})
export class LoginModule { }