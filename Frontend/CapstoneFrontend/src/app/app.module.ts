import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { SelectitemsComponent } from './selectitems/selectitems.component';
import { DeleteitemsComponent } from './deleteitems/deleteitems.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    RaiseticketComponent,
    SelectitemsComponent,
    DeleteitemsComponent,
    ViewitemsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
