import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      {
        isbn: '9783864906466',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        published: new Date(2019, 4, 30),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx',
        rating: 5,
        thumbnails: [{
          url: 'http://ng-buch.de/buch1.jpg',
          title: 'Buchcover'
        }],
        descrition: 'Die Autoren führen Sie mit einem anspruchsvollen Projekt durch die Welt von Angular...'
      },
      {
        isbn: '9783864903274',
        title: 'REact',
        authors: ['Oliver Zeigermann', 'Nils Hartmann'],
        published: new Date(2016, 6, 17),
        subtitle: 'Die praktische Einführung in React, React Router und Redux',
        rating: 3,
        thumbnails: [{
          url: 'http://ng-buch.de/buch2.jpg',
          title: 'Buchcover'
        }],
        descrition: 'React ist ein JavScript-Framework zur Entwicklung von Benutzeroberflächen...'
      }
    ];
  }

}
