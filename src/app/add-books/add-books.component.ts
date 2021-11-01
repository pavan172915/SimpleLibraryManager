import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';
import { Books } from '../Books';
import { LibraryService } from '../library.service';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  books:Books =  new Books();
  constructor(private service:LibraryService,
    private router:Router) { }

  ngOnInit(): void {
  }
  addBook(){
    this.service.addNewBook(this.books).subscribe(data=>{
      console.log(data)
      this.changeTheRoute();
    },
    error=>{console.log(error.error.text.charAt(0));
      console.log(error);
    
      this.changeTheRoute();
    }
    )
  }

  
  changeTheRoute(){
    this.router.navigate(['/books']);
  }
  
  onSubmit(){
    //console.log(this.books);
    this.addBook();
  }
}
