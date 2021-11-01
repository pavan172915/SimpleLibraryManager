import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../Books';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-max-stock',
  templateUrl: './max-stock.component.html',
  styleUrls: ['./max-stock.component.css']
})
export class MaxStockComponent implements OnInit {
  books:Books[];
  array:Array<any>;
  constructor(private serivce:LibraryService,private router:Router) {
    this.books = [];
    this.array = [];
   }
   public getMaxStock(){
     return this.serivce.findMaximumStockBooks().subscribe((data)=>{
       this.array = data;
       console.log(this.array);
     })
   }
  ngOnInit(): void {
    this.getMaxStock();
  }
  deleteBook(id:number){
    //this.router.navigate(['DeleteBook',id]);
    if(confirm("Are you sure?")){
      this.serivce.deleteBookWithId(id).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/books']);
      },(error)=>{
        console.log(error);
      })
    }
  }
}
