import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isbn$ = this.route.params.pluck('isbn');
  }

}
