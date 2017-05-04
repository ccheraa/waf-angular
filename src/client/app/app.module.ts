import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import 'hammerjs';
// import { LocalStorageService } from 'angular2-localstorage';

import { LIB_SERVICES } from '../../wa-front-angular';
import { AppComponent, COMPONENTS, ENTRY_COMPONENTS } from './component';
import { SERVICES } from './service';
import { DIRECTIVES } from './directive';
import { ROUTES } from './route';
import { MODELS } from './db';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...ENTRY_COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  providers: [
    ...LIB_SERVICES,
    ...SERVICES,
    ...MODELS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }