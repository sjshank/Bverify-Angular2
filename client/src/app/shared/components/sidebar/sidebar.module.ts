import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.Component';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        SidebarComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SidebarModule { }