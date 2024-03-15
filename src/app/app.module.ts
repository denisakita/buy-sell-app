import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  providers: [],
})
export class AppModule {
}
