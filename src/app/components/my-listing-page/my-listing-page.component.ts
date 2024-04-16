import {Component, OnInit} from '@angular/core';
import {Listing} from "../../models/types";
import {ListingsService} from "../../service";

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrl: './my-listing-page.component.css'
})
export class MyListingPageComponent implements OnInit {
  // listings: Listing[] = [];

  listings = [
    new Listing(1, 'Wireless Speaker', 'Portable wireless speaker with rich sound.', 79.99, 12, 3),
    new Listing(2, 'Laptop', 'Brand new smartphone with latest features.', 999.99, 12, 3),
    new Listing(3, 'Headphones', 'High-quality headphones with noise cancellation.', 600, 12, 3),
    new Listing(4, 'PC', 'PC Dell', 600, 12, 3),
    new Listing(5, 'Smartwatch', 'Smartwatch with fitness tracking.', 199.99, 12, 4),
    // Add more listings here if needed
  ];
  constructor(private listingsService: ListingsService) {
  }

  ngOnInit() {
    // this.listingsService.getListingsForUser()
    //   .subscribe(listing => this.listings = listing);

    this.listings = this.listings.filter(listing => listing.user_id === 3);
  }

  onDeleteClicked(listingId: number) {
    this.listingsService.deleteListing(listingId)
      .subscribe(() => {
        this.listings = this.listings.filter(
          listing => listing.id !== listingId
        )
      });
  }
}
