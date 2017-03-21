import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { PageHeaderModule } from '../shared/components/pageheader/pageheader.module';

import { RegisterProductComponent } from './components/register/register.component';
import { ProductProcureComponent } from './components/procure/procure.component';
import { ProductShipComponent } from './components/ship/ship.component';
import { ProductShipmentComponent } from './components/shipment/shipment.component';
import { AcknowledgeComponent } from './components/acknowledge/acknowledge.component';

@NgModule({
    declarations: [
        RegisterProductComponent,
        ProductProcureComponent,
        ProductShipComponent,
        ProductShipmentComponent,
        AcknowledgeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PageHeaderModule,
        Ng2SmartTableModule,
        RouterModule
    ],
    exports: [
        RegisterProductComponent,
        ProductProcureComponent,
        ProductShipComponent,
        ProductShipmentComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductModule { }