import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsPageComponent } from './pages/bookings-page/bookings-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginestablishmentPageComponent } from './pages/loginestablishment-page/loginestablishment-page.component';
import { LoginuserPageComponent } from './pages/loginuser-page/loginuser-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProfileEstablishmentPageComponent } from './pages/profile-establishment-page/profile-establishment-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegistryEstablishmentPageComponent } from './pages/registry-establishment-page/registry-establishment-page.component';
import { RegistryUserPageComponent } from './pages/registry-user-page/registry-user-page.component';
import { UploadproductsPageComponent } from './pages/uploadproducts-page/uploadproducts-page.component';

const routes: Routes = [
  {path:"profileuser",component:ProfilePageComponent},
  {path:"profileEst",component:ProfileEstablishmentPageComponent},
  {path:"booking",component:BookingsPageComponent},
  {path:"home",component:HomePageComponent},
  {path:"loginuser",component:LoginuserPageComponent},
  {path:"loginEst",component:LoginestablishmentPageComponent},
  {path:"products",component:ProductsPageComponent},
  {path:"uploadpro",component:UploadproductsPageComponent},
  {path:"registryUser",component:RegistryUserPageComponent},
  {path:"registryEst",component:RegistryEstablishmentPageComponent},
  {path:"**",component:HomePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
