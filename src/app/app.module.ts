import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HeaderComponent } from './components/header/header.component';
import { NgxElectronModule } from 'ngx-electron';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
