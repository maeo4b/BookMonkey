import { Book } from './book';
import { BookRaw } from './book-raw';

export class BookFactory {
  static empty() {
    return {
      isbn: '',
      title: '',
      authors: [''],
      published: new Date(),
      subtitle: '',
      rating: 0,
      thumbnails: [
        {
          url: '',
          title: ''
        }
      ],
      description: ''
    };
  }

  static fromRaw(bookRaw: BookRaw): Book {
    return {
      ...bookRaw,
      published: new Date(bookRaw.published)
    };
  }
}
