import { Injectable, Optional } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './Books';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private apiURL = 'http://localhost:8080/api/allBooks/';
  private addUrl = 'http://localhost:8080/api/addBook/';
  private deleteURL = 'http://localhost:8080/api/removeBook';
  private getUrl = 'http://localhost:8080/api/getBook/';
  private putURL = 'http://localhost:8080/api/updateBook/';
  private authorURL = 'http://localhost:8080/api/authorName/';
  private booknameURL = 'http://localhost:8080/api/bookName/';
  private stockURL = 'http://localhost:8080/api/stock/';

  constructor(private http:HttpClient) { }

  public getBooks():Observable<Books[]>{
    return this.http.get<Books[]>(`${this.apiURL}`);
  }
  public addNewBook(books:Books) : Observable<Object>{
    return this.http.post(`${this.addUrl}`,books);
  }
  public deleteBookWithId(id:number){
    return this.http.delete(`${this.deleteURL}/${id}`);
  }
  public getBookWithId(id:number) : Observable<Books>{
    return this.http.get<Books>(`${this.getUrl}/${id}`);
  }
  public updateBook(id:number,books:Books):Observable<Books>{
    return this.http.put<Books>(`${this.putURL}/${id}`,books);
  }
  public findBookWithID(id:number) : Observable<Books[]>{
    return this.http.get<Books[]>(`${this.getUrl}/${id}`);
  }
  public findBookWithAuthors(name:string) : Observable<Books[]>{
    return this.http.get<Books[]>(`${this.authorURL}/${name}`);
  }
  public findBooksWithBookName(name:string):Observable<Books[]>{
    return this.http.get<Books[]>(`${this.booknameURL}/${name}`);
  }
  public findMaximumStockBooks():Observable<Books[]>{
    return this.http.get<Books[]>(`${this.stockURL}`);
  }
}
