import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PageHeaderModule } from '../shared/components/pageheader/pageheader.module';

import { RegisterMaterialComponent } from './components/register/register.component';
import { ProcureComponent } from './components/procure/procure.component';
import { ShipComponent } from './components/ship/ship.component';
import { MaterialShipmentComponent } from './components/shipment/shipment.component';

@NgModule({
    declarations: [
        RegisterMaterialComponent,
        ProcureComponent,
        ShipComponent,
        MaterialShipmentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PageHeaderModule,
        NgxDatatableModule
    ],
    exports: [
        RegisterMaterialComponent,
        ProcureComponent,
        ShipComponent,
        MaterialShipmentComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MaterialModule { }