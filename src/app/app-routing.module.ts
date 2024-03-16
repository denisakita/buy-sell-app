import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListingsPageComponent} from "./listings-page/listings-page.component";
import {ListingDetailPageComponent} from "./listing-detail-page/listing-detail-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {EditListingPageComponent} from "./edit-listing-page/edit-listing-page.component";
import {MyListingPageComponent} from "./my-listing-page/my-listing-page.component";
import {NewListingPageComponent} from "./new-listing-page/new-listing-page.component";

const routes: Routes = [
  {path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  {path: 'listings/:id', component: ListingDetailPageComponent},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'edit-listing/:id', component: EditListingPageComponent},
  {path: 'my-listings', component: MyListingPageComponent},
  {path: 'new-listing', component: NewListingPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
