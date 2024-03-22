import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Listing} from "../models/types";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {AngularFireAuth} from "@angular/fire/compat/auth";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const httpOptionsWithAuthToken = (token: any) => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken': token

  })
});

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private apiHost: string = environment.API_HOST;

  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
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

  createListing(name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(`${this.apiHost}/api/listings`,
      {name, description, price},
      httpOptions);
  }

  editListing(id: number, name: string, description: string, price: number): Observable<Listing> {
    return this.http.put<Listing>(`${this.apiHost}/api/listings/${id}`,
      {name, description, price},
      httpOptions);
  }

  getListingsForUser(): Observable<Listing[]> {
    return new Observable<Listing[]>(
      observer => {
        this.auth.user.subscribe(user => {
          user && user.getIdToken().then(token => {
            if (user && token) {
              this.http.get<Listing[]>(`${this.apiHost}/api/users/${user.uid}/listings`, httpOptionsWithAuthToken(token))
                .subscribe(listings=>{
                  observer.next(listings);
                });

            }
            else{
              observer.next([]);
            }
          })
        })
      }
    );
  }

  deleteListing(id: number): Observable<Listing> {
    return this.http.delete<Listing>(`${this.apiHost}/api/listings/${id}`, {});
  }

}
