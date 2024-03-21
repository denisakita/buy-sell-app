import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Listing} from "../models/types";
import {fakeListing} from "../../assets/mock/fake-data";

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getListings(): Listing[] {
    return fakeListing;
  }

}
