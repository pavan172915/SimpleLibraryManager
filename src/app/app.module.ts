import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryService } from './library.service';
import { BookListComponent } from './book-list/book-list.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { FormsModule } from '@angular/forms';

import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { DisplaybooksComponent } from './displaybooks/displaybooks.component';
import { SearchauthorComponent } from './searchauthor/searchauthor.component';
import { DisplayauthorComponent } from './displayauthor/displayauthor.component';
import { SearchBookNameComponent } from './search-book-name/search-book-name.component';
import { DisplyaBookNameComponent } from './displya-book-name/displya-book-name.component';
import { MaxStockComponent } from './max-stock/max-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBooksComponent,
   
    UpdatebookComponent,
        SearchbookComponent,
        DisplaybooksComponent,
        SearchauthorComponent,
        DisplayauthorComponent,
        SearchBookNameComponent,
        DisplyaBookNameComponent,
        MaxStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
