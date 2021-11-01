import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Books } from '../Books';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
books:Books = new Books();
id: number;
  constructor(private service:LibraryService,
    private route:ActivatedRoute,
    private router:Router) { 
      this.id = 0;
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getBookWithId(this.id).subscribe((data)=>{
      this.books = data;
      console.log(this.books);
    });
  }
  updateBookDetails(){
    this.service.updateBook(this.id,this.books).subscribe((data)=>{
      console.log(data);
      this.books = new Books();
      this.changeRoute();
    },(error)=>{
      console.log(error);
      this.changeRoute();
    });
  }
  onSubmit(){
this.updateBookDetails();

  }
  changeRoute(){
    this.router.navigate(['/books']);
  }

}
