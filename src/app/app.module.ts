import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { AppRoutingModule } from './/app-routing.module';
import { FinderComponent } from './finder/finder.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FinderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
