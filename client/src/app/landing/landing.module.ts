import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing.component';


@NgModule({
    declarations: [
        LandingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
    ]
})
export class LandingModule { }