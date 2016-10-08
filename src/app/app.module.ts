import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import appRoutes from './app.routes';
import { FooterModule } from './common/footer/footer.module';
import { HeaderModule } from './common/header/header.module';
import { LoginModule } from './common/login/login.module';

import { AppComponent } from './app.component';

const firebaseConfig = require("../firebase.conf.json");
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    FooterModule,
    HeaderModule,
    LoginModule,
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
