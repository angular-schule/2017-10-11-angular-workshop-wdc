import { Book } from './../shared/book';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  // Gegenstück [Property-Bindings]
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
