import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { AppHttpService } from './utils/http.service';


import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { LandingModule } from './landing/landing.module';
import { ProductModule } from './product/product.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

import { AppRouter } from './config/app.routing';
import { AppGuardService } from './config/app.guard';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRouter,
    RegisterModule,
    LoginModule,
    MaterialModule,
    LandingModule,
    ProductModule
  ],
  providers: [AppGuardService,
    {
      provide: AppHttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions, router: Router ) => {
        return new AppHttpService(backend, options, router);
      },
      deps: [XHRBackend, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
