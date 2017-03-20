import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageheaderComponent } from './pageheader.component';

@NgModule({
    declarations: [
        PageheaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        PageheaderComponent
    ]
})
export class PageHeaderModule { }