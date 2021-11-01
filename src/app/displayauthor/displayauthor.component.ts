import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../Books';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-displayauthor',
  templateUrl: './displayauthor.component.html',
  styleUrls: ['./displayauthor.component.css']
})
export class DisplayauthorComponent implements OnInit {
books:Books[];

name:string ;
array:Array<any>;
array1:Array<any>;
  constructor(private service:LibraryService,private route:ActivatedRoute,private router:Router) { 
    console.log(route.snapshot.params);
    this.name = route.snapshot.params.name;
    this.array = [];
    this.books = [];
    this.array1 = [];
  }

  ngOnInit(): void {
    this.getAuthors();
  }
  public getAuthors(){
    this.service.findBookWithAuthors(this.name).subscribe((data)=>{
      /*console.log('Data')
      console.log(data);
      console.log(this.name);
      console.log(this.array);*/
      this.books = data;
      this.array = data;
      //this.array.push(this.books);
      console.log(data);
      //console.log(this.array[0]);
      for(let i = 0;i<this.array.length;i++){
        this.array1.push(this.array[i][0]);
      }
      console.log(this.array);
      console.log(this.array1);
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
