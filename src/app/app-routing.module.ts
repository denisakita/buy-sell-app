import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {
  ContactPageComponent,
  EditListingPageComponent,
  ListingDetailPageComponent,
  ListingsPageComponent, MyListingPageComponent, NewListingPageComponent
} from "./components";


const routes: Routes = [
  {path: '', redirectTo: 'listings', pathMatch: 'full'},
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
