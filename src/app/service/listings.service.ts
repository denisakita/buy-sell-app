import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Listing} from "../models/types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

}
