import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule} from 'ngx-bootstrap/collapse'
import { HeaderComponent } from './components/header/header.component';
import { NgxElectronModule } from 'ngx-electron';
import {MatNativeDateModule} from '@angular/material/core';
import { BodyComponent } from './components/body/body.component';
import { EditComponent } from './components/edit/edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './components/result/result.component';
import { TextbuttonComponent } from './components/textbutton/textbutton.component';
import { TextdropdownComponent } from './components/textdropdown/textdropdown.component';
import { TestlistComponent } from './components/testlist/testlist.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule } from '@angular/cdk/drag-drop';
import { SegmentListElementComponent } from './components/segment-list-element/segment-list-element.component';
import { SegmentListForceComponent } from './components/segment-list-force/segment-list-force.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodviewComponent } from './components/rodview/rodview.component';
import { RodviewboxComponent } from './components/rodviewbox/rodviewbox.component';
import { RodviewforceComponent } from './components/rodviewforce/rodviewforce.component';
import { SegmentListWallComponent } from './components/segment-list-wall/segment-list-wall.component';
import { RodviewwallComponent } from './components/rodviewwall/rodviewwall.component'
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
    TextdropdownComponent,
    TestlistComponent,
    SegmentListElementComponent,
    SegmentListForceComponent,
    RodviewComponent,
    RodviewboxComponent,
    RodviewforceComponent,
    SegmentListWallComponent,
    RodviewwallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    NgxElectronModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule ,
    CollapseModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));