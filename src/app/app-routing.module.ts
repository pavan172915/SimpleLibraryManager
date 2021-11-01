import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { BookListComponent } from './book-list/book-list.component';
import { DisplayauthorComponent } from './displayauthor/displayauthor.component';
import { DisplaybooksComponent } from './displaybooks/displaybooks.component';
import { DisplyaBookNameComponent } from './displya-book-name/displya-book-name.component';
import { MaxStockComponent } from './max-stock/max-stock.component';
import { SearchBookNameComponent } from './search-book-name/search-book-name.component';
import { SearchauthorComponent } from './searchauthor/searchauthor.component';
import { SearchbookComponent } from './searchbook/searchbook.component';

import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:'books' , component:BookListComponent},
  {path:'addNewBook',component:AddBooksComponent},
  {path:'updateBook/:id',component:UpdatebookComponent},
  {path:'searchBook',component:SearchbookComponent},
  {path:'displayBooks/:id',component:DisplaybooksComponent},
  {path:'searchAuthor',component:SearchauthorComponent},
  {path:'displayAuthor/:name',component:DisplayauthorComponent},
  {path:'searchBookName',component:SearchBookNameComponent},
  {path:'displayBookName/:name',component:DisplyaBookNameComponent},
  {path:'maxStock',component:MaxStockComponent},
  {path:'',redirectTo:'books',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
