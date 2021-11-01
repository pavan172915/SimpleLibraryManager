import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../Books';

@Component({
  selector: 'app-search-book-name',
  templateUrl: './search-book-name.component.html',
  styleUrls: ['./search-book-name.component.css']
})
export class SearchBookNameComponent implements OnInit {
  books:Books = new Books();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.books.bookName);
    this.router.navigate(['/displayBookName',this.books.bookName]);
  }

}
