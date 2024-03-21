import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from "../../service";
import {Listing} from "../../models/types";

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing =new Listing();
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ) {}

  ngOnInit() {
    this.isLoading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listingsService.getListingById(id)
      .subscribe(
        (response: any) => {
          this.listing = response;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching listing:', error);
          this.isLoading = false;
        }
      );
  }
}
