import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Listing} from "../../models/types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListingsService} from "../../service";

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit {
  listing: Listing = new Listing();
  listingFg: FormGroup = new FormGroup<any>({})

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private listingsService: ListingsService
  ) {
  }

  ngOnInit() {
    this.listingFg = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.listingFg.patchValue({
          name: this.listing.name,
          description: this.listing.description,
          price: this.listing.price
        });
      });
  }


  onSubmit() {
    const {name, description, price} = this.listingFg.value;
    this.listingsService.editListing(this.listing.id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      })
  };
}
