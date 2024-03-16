import {Component, OnInit} from '@angular/core';
import {Listing} from "../../models/types";
import {fakeListing} from "../../../assets/mock/fake-data";

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {
  }

  ngOnInit() {
    this.listings = fakeListing;
  }
}
