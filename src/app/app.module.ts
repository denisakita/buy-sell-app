import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {EditListingPageComponent} from "./edit-listing-page/edit-listing-page.component";
import {ListingDetailPageComponent} from "./listing-detail-page/listing-detail-page.component";
import {ListingsPageComponent} from "./listings-page/listings-page.component";
import {MyListingPageComponent} from "./my-listing-page/my-listing-page.component";
import {NewListingPageComponent} from "./new-listing-page/new-listing-page.component";
import {AppComponent} from "./app.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    EditListingPageComponent,
    ListingDetailPageComponent,
    ListingsPageComponent,
    MyListingPageComponent,
    NewListingPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // RouterOutlet,
  ],
  exports: [],
  providers: [HttpClientModule, HttpClient],
  bootstrap:[AppComponent]

})
export class AppModule {
}
