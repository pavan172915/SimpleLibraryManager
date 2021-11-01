import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../Books';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-searchauthor',
  templateUrl: './searchauthor.component.html',
  styleUrls: ['./searchauthor.component.css']
})
export class SearchauthorComponent implements OnInit {
  books:Books = new Books();

  constructor(private service:LibraryService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log(this.books.bookAuthor);
    this.router.navigate(['/displayAuthor',this.books.bookAuthor])

  }

}
