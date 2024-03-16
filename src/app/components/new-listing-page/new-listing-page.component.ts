import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Listing} from "../../models/types";

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent implements OnInit {
  listingFG:FormGroup = new FormGroup({})

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
    alert('Saving Changes');
    this.router.navigateByUrl('/my-listings')
  };
}
