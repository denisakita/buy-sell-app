import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {ListingsPageComponent} from "./listings-page/listings-page.component";


@NgModule({
  declarations: [ListingsPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    // RouterOutlet,
  ],
  providers: [],
})
export class AppModule {
}
