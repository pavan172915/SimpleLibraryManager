import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../Books';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {
  books:Books = new Books();
  BOOKS:Books[];
  constructor(private service:LibraryService,
    private router: Router) { 
      this.BOOKS = [];
    }

  ngOnInit(): void {
    this.getBooks();
  }
  public getBooks(){
    this.service.findBookWithID(this.books.id).subscribe((data)=>{
      this.BOOKS = data;
    })
  }
  onSubmit(){
    console.log(this.books.id);
    this.router.navigate(['/displayBooks',this.books.id]);
  }

}
