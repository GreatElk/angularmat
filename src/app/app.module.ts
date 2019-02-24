import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material.module';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,


   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Material,
    AppRoutingModule,
     ],

  exports: [RouterModule
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
