import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MouseRowComponent } from './mouse-row/mouse-row.component';
import { FormComponent } from './form/form.component';
import { MousesComponent } from './mouses/mouses.component';
import { FormsModule } from '@angular/forms';
import { KeyboardsComponent } from './keyboards/keyboards.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseRowComponent,
    FormComponent,
    MousesComponent,
    KeyboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
