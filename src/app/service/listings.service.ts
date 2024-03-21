import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Listing} from "../models/types";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private apiHost: string = environment.API_HOST;

  constructor(
    private http: HttpClient
  ) {
  }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.apiHost}/api/listings`);
  }

  getListingById(id: number): Observable<Listing> {
    return this.http.get<Listing>(`${this.apiHost}/api/listings/${id}`);
  }

  addViewToListing(id: number): Observable<Listing> {
    return this.http.post<Listing>(`${this.apiHost}/api/listings/${id}/add-view`, {}, httpOptions);
  }

}
