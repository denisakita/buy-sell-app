import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Listing} from "../../models/types";
import {fakeListing} from "../../../assets/mock/fake-data";


@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing = new Listing();

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const list = fakeListing.find(listing => listing?.id === id);
    if (list) {
      this.listing = list; // Assigning the found listing to the class property
    }
  }
}
