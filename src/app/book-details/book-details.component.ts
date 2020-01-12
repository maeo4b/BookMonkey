import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private bookStore: BookStoreService
  ) { }

  ngOnInit() {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.bookStore.getSingle(isbn).subscribe(book => { this.book = book; });
  }

  getRating(num: number): Array<number> {
    return new Array(num);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bookStore.remove(this.book.isbn)
        .subscribe(
          () => this.router.navigate(
            ['../'],
            { relativeTo: this.route }
          )
        );
    }
  }
}
