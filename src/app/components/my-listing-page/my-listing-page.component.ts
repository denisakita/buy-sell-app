import {Component, OnInit} from '@angular/core';
import {Listing} from "../../models/types";
import {fakeListing} from "../../../assets/mock/fake-data";

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrl: './my-listing-page.component.css'
})
export class MyListingPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {
  }

  ngOnInit() {
    this.listings = fakeListing;
  }

  onDeleteClicked(listingId: string) {
    alert(`Deleting your listing with id ${listingId}`);
  }
}
