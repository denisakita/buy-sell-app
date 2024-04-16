import {Component, OnInit} from '@angular/core';
import {Listing} from "../../models/types";
import {ListingsService} from "../../service";

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {
  }

  ngOnInit() {
    // Assuming you're fetching listings from a service,
    // if not, you can populate the listings array with some sample data here.
    // this.listingsService.getListings()
    //   .subscribe(listings => this.listings = listings);

    // Sample data initialization (if not fetched from a service)
    this.listings = [
      new Listing(1, 'Wireless Speaker', 'Portable wireless speaker with rich sound.', 79.99, 12, 3),
      new Listing(2, 'Laptop', 'Brand new smartphone with latest features.', 999.99, 12, 3),
      new Listing(3, 'Headphones', 'High-quality headphones with noise cancellation.', 600, 12, 3),
      new Listing(4, 'PC', 'PC Dell', 600, 12, 3),
      new Listing(5, 'Smartwatch', 'Smartwatch with fitness tracking.', 199.99, 12, 4),
      // Add more listings here if needed
    ];
  }
}
