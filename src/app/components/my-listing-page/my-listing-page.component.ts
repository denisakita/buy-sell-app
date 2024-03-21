import {Component, OnInit} from '@angular/core';
import {Listing} from "../../models/types";
import {ListingsService} from "../../service";

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrl: './my-listing-page.component.css'
})
export class MyListingPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {
  }

  ngOnInit() {
    this.listingsService.getListingsForUser()
      .subscribe(listing => this.listings = listing);
  }

  onDeleteClicked(listingId: number) {
    alert(`Deleting your listing with id ${listingId}`);
    this.listingsService.deleteListing(listingId);
  }
}
