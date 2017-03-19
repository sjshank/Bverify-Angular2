import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
        ReactiveFormsModule
    ],
    exports: [
        RegisterMaterialComponent,
        ProcureComponent,
        ShipComponent,
        MaterialShipmentComponent
    ]
})
export class MaterialModule { }