import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import appRoutes from './app.routes';
import { CoreModule } from './common/core/core.module';
import { FooterModule } from './common/footer/footer.module';
import { HeaderModule } from './common/header/header.module';

import { AppComponent } from './app.component';

const firebaseConfig = require("../firebase.conf.json");
const myFirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
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
    CoreModule,
    FooterModule,
    HeaderModule,
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
