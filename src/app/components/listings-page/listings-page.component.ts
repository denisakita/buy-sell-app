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
  this.listingsService.getListings()
    .subscribe(listings=>this.listings=listings);
  }
}
