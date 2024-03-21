import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import * as fromComponents from "./components";


@NgModule({
  declarations: [
    ...fromComponents.components,
    AppComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // RouterOutlet,
  ],
  exports: [],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent]

})
export class AppModule {
}
