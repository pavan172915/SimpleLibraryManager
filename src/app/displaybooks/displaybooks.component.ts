import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Books } from '../Books';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.css']
})
export class DisplaybooksComponent implements OnInit {
  books:Books[];
  
  id:any;
  arrayOfObj:Array<any>;
  array:Array<any>
  constructor(private library:LibraryService,private router:Router,private route:ActivatedRoute) { 
    this.books = []
    this.id = route.snapshot.params.id;
    this.arrayOfObj = []
    this.array = [];
  }

  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks(){
    this.library.findBookWithID(this.id).subscribe(data =>{
      this.books = data;
      //console.log(this.books);
      this.array.push(this.books);
       this.arrayOfObj = Object.entries(this.books).map((e) => ( { [e[0]]: e[1] } ));
      //console.log(this.arrayOfObj);
      console.log(this.array);
    });
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
