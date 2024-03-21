import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Listing} from "../../models/types";
import {fakeListing} from "../../../assets/mock/fake-data";
import {ListingsService} from "../../service";


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing = new Listing();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService:ListingsService
  ) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const list = fakeListing.find(listing => listing?.id === id);
    if (list) {
      this.listing = list; // Assigning the found listing to the class property
    }
    this.message = `Hi, I am interested in your ${this.listing.name.toLowerCase()}!`;

  }
  sendMessage(){
    alert('Your message has ben sent!');
    this.router.navigateByUrl('/listings');
  }
}
