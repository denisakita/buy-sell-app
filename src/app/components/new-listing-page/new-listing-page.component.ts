import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ListingsService} from "../../service";

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent implements OnInit {
  listingFG: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private listingsService: ListingsService
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
    const { name, description, price } = this.listingFG.value;
    this.listingsService.createListing(name, description, price).subscribe(() => {
      this.router.navigateByUrl('/my-listings')
    });
  }

}
