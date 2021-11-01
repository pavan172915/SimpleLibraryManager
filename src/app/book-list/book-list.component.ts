import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Books } from '../Books';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Books[];
  books1:Books = new Books();
  constructor(private library:LibraryService,private router:Router,private route:ActivatedRoute) { 
    this.books = []
  }

  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks(){
    this.library.getBooks().subscribe(data =>{
      this.books = data;
      console.log(this.books);
    });
  }
  updateBook(id:number){
    this.router.navigate(['updateBook',id]);
  }
  deleteBook(id:number){
    //this.router.navigate(['DeleteBook',id]);
    if(confirm("Are you sure?")){
      this.library.deleteBookWithId(id).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/books']);
      },(error)=>{
        console.log(error);
      })
    }
  }
}
