import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from './book';
import { BookFactory } from './book-factory';
import { BookRaw } from './book-raw';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private readonly api = 'https://api3.angular-buch.com/secure';

  constructor(private http: HttpClient) {
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/book`, book, { responseType: 'text' }).pipe(
      catchError(this.errorHandler)
    );
  }

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(
      retry(2),
      map(booksRaw =>
        booksRaw.map(bookRaw => BookFactory.fromRaw(bookRaw))),
      catchError(this.errorHandler)
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/book/${isbn}`).pipe(
      retry(2),
      map(bookRaw => BookFactory.fromRaw(bookRaw)),
      catchError(this.errorHandler)
    );
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`).pipe(
      retry(2),
      map(booksRaw =>
        booksRaw.map(bookRaw => BookFactory.fromRaw(bookRaw))),
      catchError(this.errorHandler)
    );
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`, { responseType: 'text' }).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.log('Error aufgetreten!', error.message);
    return throwError(error);
  }
}
