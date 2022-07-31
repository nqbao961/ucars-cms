import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { CarBrand } from './models';

@Injectable({ providedIn: 'root' })
export class CarBrandService {
  private brandsUrl = 'api/brands'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET brands from the server */
  getCarBrands(): Observable<CarBrand[]> {
    return this.http.get<CarBrand[]>(this.brandsUrl).pipe(
      tap((_) => this.log('fetched brands')),
      catchError(this.handleError<CarBrand[]>('getCarBrands', []))
    );
  }

  /** GET brand by id. Return `undefined` when id not found */
  getCarBrandNo404<Data>(id: number): Observable<CarBrand> {
    const url = `${this.brandsUrl}/?id=${id}`;
    return this.http.get<CarBrand[]>(url).pipe(
      map((brands) => brands[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} brand id=${id}`);
      }),
      catchError(this.handleError<CarBrand>(`getCarBrand id=${id}`))
    );
  }

  /** GET brand by id. Will 404 if id not found */
  getCarBrand(id: number): Observable<CarBrand> {
    const url = `${this.brandsUrl}/${id}`;
    return this.http.get<CarBrand>(url).pipe(
      tap((_) => this.log(`fetched brand id=${id}`)),
      catchError(this.handleError<CarBrand>(`getCarBrand id=${id}`))
    );
  }

  /* GET brands whose name contains search term */
  searchCarBrands(term: string): Observable<CarBrand[]> {
    if (!term.trim()) {
      // if not search term, return all brands array.
      return this.getCarBrands();
    }
    return this.http.get<CarBrand[]>(`${this.brandsUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found brands matching "${term}"`)
          : this.log(`no brands matching "${term}"`)
      ),
      catchError(this.handleError<CarBrand[]>('searchCarBrands', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new brand to the server */
  addCarBrand(brand: CarBrand): Observable<CarBrand> {
    return this.http
      .post<CarBrand>(this.brandsUrl, brand, this.httpOptions)
      .pipe(
        tap((newCarBrand: CarBrand) =>
          this.log(`added brand w/ id=${newCarBrand.id}`)
        ),
        catchError(this.handleError<CarBrand>('addCarBrand'))
      );
  }

  /** DELETE: delete the brand from the server */
  deleteCarBrand(id: number): Observable<CarBrand> {
    const url = `${this.brandsUrl}/${id}`;

    return this.http.delete<CarBrand>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted brand id=${id}`)),
      catchError(this.handleError<CarBrand>('deleteCarBrand'))
    );
  }

  /** PUT: update the brand on the server */
  updateCarBrand(brand: CarBrand): Observable<any> {
    return this.http.put(this.brandsUrl, brand, this.httpOptions).pipe(
      tap((_) => this.log(`updated brand id=${brand.id}`)),
      catchError(this.handleError<any>('updateCarBrand'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CarBrandService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CarBrandService: ${message}`);
  }
}
