import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';

import {environment} from '../environments/environment';


import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';

/*
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
*/

import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'ios'
    }),

    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
