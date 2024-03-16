import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Listing} from "../../models/types";

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent implements OnInit {
  listingFG: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.listingFG = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, Validators.min(0)]
    });
  }

  onSubmit() {
    if (this.listingFG.valid) {
      const newListing: Listing = this.listingFG.value;

      alert('Edit listing...');
      this.router.navigateByUrl('/my-listings');
    } else {
      alert('Please fill out all required fields.');
    }
  }

}
