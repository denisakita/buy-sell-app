import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Listing} from "../../models/types";
import {fakeListing} from "../../../assets/mock/fake-data";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.listingFg = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const list = fakeListing.find(listing => listing?.id === id);
    if (list) {
      this.listing = list;
      this.listingFg.patchValue({
        name: this.listing.name,
        description: this.listing.description,
        price: this.listing.price
      });// Assigning the found listing to the class property
    }
  }


  onSubmit() {
    alert('Saving Changes');
    this.router.navigateByUrl('/my-listings')
  };
}
