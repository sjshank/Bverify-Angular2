import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/components/login.component';
import { RegisterComponent } from '../register/register.component';
import { LogoutComponent } from '../login/components/logout.component';
import { LandingComponent } from '../landing/landing.component';

import { RegisterMaterialComponent  } from '../material/components/register/register.component';
import { MaterialShipComponent } from '../material/components/ship/ship.component';
import { MaterialProcureComponent } from '../material/components/procure/procure.component';
import { MaterialShipmentComponent } from '../material/components/shipment/shipment.component';

import { RegisterProductComponent  } from '../product/components/register/register.component';
import { ProductShipComponent } from '../product/components/ship/ship.component';
import { ProductProcureComponent } from '../product/components/procure/procure.component';
import { ProductShipmentComponent } from '../product/components/shipment/shipment.component';
import { AcknowledgeComponent } from '../product/components/acknowledge/acknowledge.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'material/register', component: RegisterMaterialComponent },
    { path: 'material/ship', component: MaterialShipComponent },
    { path: 'material/procure', component: MaterialProcureComponent },
    { path: 'material/shipment', component: MaterialShipmentComponent },
    { path: 'product/register', component: RegisterProductComponent },
    { path: 'product/ship', component: ProductShipComponent },
    { path: 'product/procure', component: ProductProcureComponent },
    { path: 'product/acknowledged', component: AcknowledgeComponent },
    { path: 'product/shipment', component: ProductShipmentComponent },
    { path: '**', redirectTo: 'home' }
];

export const AppRouter = RouterModule.forRoot(appRoutes);
