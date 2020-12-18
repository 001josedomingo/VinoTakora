import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginuserPageComponent } from './pages/loginuser-page/loginuser-page.component';
import { LoginestablishmentPageComponent } from './pages/loginestablishment-page/loginestablishment-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { UploadproductsPageComponent } from './pages/uploadproducts-page/uploadproducts-page.component';
import { BookingsPageComponent } from './pages/bookings-page/bookings-page.component';
import { ProfileEstablishmentPageComponent } from './pages/profile-establishment-page/profile-establishment-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { RegistryUserPageComponent } from './pages/registry-user-page/registry-user-page.component';
import { RegistryEstablishmentPageComponent } from './pages/registry-establishment-page/registry-establishment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginuserPageComponent,
    LoginestablishmentPageComponent,
    ProfilePageComponent,
    ProductsPageComponent,
    UploadproductsPageComponent,
    BookingsPageComponent,
    ProfileEstablishmentPageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    RegistryUserPageComponent,
    RegistryEstablishmentPageComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
