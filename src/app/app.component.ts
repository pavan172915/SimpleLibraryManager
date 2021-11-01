import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Books } from './Books';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'LibraryManagerApp';
  public books:Books[];

  constructor(private bookService:LibraryService){
    this.books = [];
  }
  ngOnInit(){
    this.getBooks();
  }
  public getBooks() : void{
    this.bookService.getBooks().subscribe(
      (response : Books[])=>{
        this.books = response;
      },
      (error : HttpErrorResponse )=>{
        alert(error.message);
      }
    );
  }
}
