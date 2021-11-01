import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../Books';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-displya-book-name',
  templateUrl: './displya-book-name.component.html',
  styleUrls: ['./displya-book-name.component.css']
})
export class DisplyaBookNameComponent implements OnInit {
  bookname:any;
  array:Array<any>;
  books:Books[];
  constructor(private service:LibraryService,
    private router:Router,
    private route:ActivatedRoute) {
      this.bookname = route.snapshot.params.name;
      console.log(route.snapshot.params);
      console.log(this.bookname);
      this.array = [];
      this.books = [];
     }

  ngOnInit(): void {
    this.getAllBooks();
  }
  private getAllBooks(){
    this.service.findBooksWithBookName(this.bookname).subscribe((data)=>{
      console.log(data);
      this.array = data;
    })
  }
  deleteBook(id:number){
    //this.router.navigate(['DeleteBook',id]);
    if(confirm("Are you sure?")){
      this.service.deleteBookWithId(id).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/books']);
      },(error)=>{
        console.log(error);
      })
    }
  }

}
