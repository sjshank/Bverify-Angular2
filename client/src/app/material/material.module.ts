import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { PageHeaderModule } from '../shared/components/pageheader/pageheader.module';
import { AppFileUploadModule } from '../shared/components/fileupload/fileupload.module';
import { SidebarModule } from '../shared/components/sidebar/sidebar.module';

import { RegisterMaterialComponent } from './components/register/register.component';
import { MaterialProcureComponent } from './components/procure/procure.component';
import { MaterialShipComponent } from './components/ship/ship.component';
import { MaterialShipmentComponent } from './components/shipment/shipment.component';

@NgModule({
    declarations: [
        RegisterMaterialComponent,
        MaterialProcureComponent,
        MaterialShipComponent,
        MaterialShipmentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PageHeaderModule,
        Ng2SmartTableModule,
        AppFileUploadModule,
        SidebarModule
    ],
    exports: [
        RegisterMaterialComponent,
        MaterialProcureComponent,
        MaterialShipComponent,
        MaterialShipmentComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MaterialModule { }