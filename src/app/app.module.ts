import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { HomeComponent } from './home/home.component';
import { GstGetComponent } from './gst-get/gst-get.component';

import { BusinessService } from './business.service';
import { GstEditComponent } from './gst-edit/gst-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    HomeComponent,
    GstGetComponent,
    GstEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  // providers: [],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
