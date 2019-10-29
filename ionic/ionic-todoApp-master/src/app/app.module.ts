import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UpsertNotePage } from './components/upsert-note/upsert-note.page';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [AppComponent, UpsertNotePage],
  entryComponents: [AppComponent, UpsertNotePage],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    NotesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
