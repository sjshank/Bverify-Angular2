import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/components/login.component';
import { RegisterComponent } from '../register/register.component';
import { LogoutComponent } from '../login/components/logout.component';
import { LandingComponent } from '../landing/landing.component';

import { RegisterMaterialComponent  } from '../material/components/register/register.component';
import { ShipComponent } from '../material/components/ship/ship.component';
import { ProcureComponent } from '../material/components/procure/procure.component';
import { MaterialShipmentComponent } from '../material/components/shipment/shipment.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'material/register', component: RegisterMaterialComponent },
    { path: 'material/ship', component: ShipComponent },
    { path: 'material/procure', component: ProcureComponent },
    { path: 'material/shipment', component: MaterialShipmentComponent },
    { path: '**', redirectTo: 'home' }
];

export const AppRouter = RouterModule.forRoot(appRoutes);
