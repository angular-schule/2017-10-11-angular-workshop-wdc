import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get<any[]>('https://api.angular.schule/books')
      .map(rawBooks => rawBooks
        .map(b => new Book(
          b.isbn,
          b.title,
          b.description,
          b.rating)));
  }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen.. Best Practices', 5),
      new Book('111', 'AngularJS', 'Einführung in AngularJS')
    ];
  }
}
