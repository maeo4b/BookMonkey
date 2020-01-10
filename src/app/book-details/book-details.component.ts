import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookStore: BookStoreService
  ) { }

  ngOnInit() {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.book = this.bookStore.getSingle(isbn);
  }

  getRating(num: number): Array<number> {
    return new Array(num);
  }
}
