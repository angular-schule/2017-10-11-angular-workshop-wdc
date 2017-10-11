import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent  {

  // Gegenstück: (rated)="" (Event Binding)
  @Output() rated = new EventEmitter<Book>();

  // Gegenstück: [book]="" (Property Binding)
  @Input() book: Book;

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  getStars() {
    return new Array(this.book.rating);
  }

}
