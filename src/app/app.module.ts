import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HeaderComponent } from './components/header/header.component';
import { NgxElectronModule } from 'ngx-electron';
import { BodyComponent } from './components/body/body.component';
import { EditComponent } from './components/edit/edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './components/result/result.component';
import { TextbuttonComponent } from './components/textbutton/textbutton.component';
import { TextdropdownComponent } from './components/textdropdown/textdropdown.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    BodyComponent,
    EditComponent,
    FooterComponent,
    ResultComponent,
    TextbuttonComponent,
    TextdropdownComponent
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
