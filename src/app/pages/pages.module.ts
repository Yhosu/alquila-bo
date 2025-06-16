import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

// Pages Components
import { WishlistComponent } from './account/wishlist/wishlist.component';
import { CartComponent } from './account/cart/cart.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ProfileComponent } from './account/profile/profile.component';
import { ContactComponent } from './account/contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchComponent } from './search/search.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CompareTwoComponent } from './compare/compare-two/compare-two.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    WishlistComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ContactComponent,
    AboutUsComponent,
    SearchComponent,
    OrderSuccessComponent,
    CompareTwoComponent,
    ErrorComponent,
    FaqComponent,
  ],
  imports: [
    CommonModule,
    GalleryModule,
    LightboxModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
