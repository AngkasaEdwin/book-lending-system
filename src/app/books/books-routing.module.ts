import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ReturnComponent } from './return/return.component';


const routes: Routes = [
	{ path: 'list', component: ListComponent },
	{ path: 'return', component: ReturnComponent },
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
