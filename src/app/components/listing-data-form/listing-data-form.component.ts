import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Listing} from "../../models/types";

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent implements OnInit {
  listingFG: FormGroup = new FormGroup({})


  @Input() buttonText = '';
  @Output() onSubmit = new EventEmitter<Listing>();
  @Input() currentListingFG: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.listingFG = this.currentListingFG;
  }

  onButtonClick() {
    this.onSubmit.emit(this.listingFG.value);
  }

}
