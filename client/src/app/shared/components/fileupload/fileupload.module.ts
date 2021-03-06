import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileuploadComponent } from './fileupload.component';

import {FileUploadModule} from "ng2-file-upload/file-upload/file-upload.module";

@NgModule({
    declarations: [
        FileuploadComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FileUploadModule
    ],
    exports: [
        FileuploadComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppFileUploadModule { }