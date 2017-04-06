import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './datepicker.component';

import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    declarations: [
        DatePickerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MyDatePickerModule
    ],
    exports: [
        DatePickerComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppDatePickerModule { }