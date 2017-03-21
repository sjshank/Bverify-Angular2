import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileuploadComponent } from './fileupload.component';

import {FileUploadModule} from "ng2-file-upload/components/file-upload/file-upload.module";

@NgModule({
    declarations: [
        FileuploadComponent,
        FileUploadModule
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FileuploadComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppFileUploadModule { }