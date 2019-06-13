import { ToastService } from './../providers/toast.service';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MockProvider } from '../providers/mock/mock';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from '../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { MockDbProvider } from '../providers/db/mock-db/mock-db';
import { HomePageModule } from '../pages/home/home.module';
import { MenuProvider } from '../providers/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    LoginPageModule,
    SignupPageModule,
    HomePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MockProvider,
    ToastService,
    MockDbProvider,
    AuthService,
    AngularFireAuth,
    MenuProvider
  ],
})
export class AppModule {}
