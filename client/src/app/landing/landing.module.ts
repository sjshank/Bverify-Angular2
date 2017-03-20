import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageHeaderModule } from '../shared/components/pageheader/pageheader.module';

import { LandingComponent } from './landing.component';

@NgModule({
    declarations: [
        LandingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        PageHeaderModule
    ],
    exports: [
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LandingModule { }