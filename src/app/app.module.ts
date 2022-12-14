import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { MyFbComponent } from './my-fb/my-fb.component';

import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyBfShowComponent } from './my-bf-show/my-bf-show.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    MyFbComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    MyBfShowComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
