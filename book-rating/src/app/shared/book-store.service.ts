import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookStoreService {

  constructor() { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen.. Best Practices', 5),
      new Book('111', 'AngularJS', 'Einführung in AngularJS')
    ];
  }
}
