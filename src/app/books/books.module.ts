import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListComponent } from './list/list.component';
import { RentalComponent } from './rental/rental.component';
import { ReturnComponent } from './return/return.component';

@NgModule({
  declarations: [
    ListComponent,
    RentalComponent,
    ReturnComponent
    ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
