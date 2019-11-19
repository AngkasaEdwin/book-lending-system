import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Array<Book>;
  filteredList: Array<Book>;

  constructor() { }

  ngOnInit() {
	this.initMockBooks();
	
	//Exclude rented books in local storage
	let rentedIds = localStorage.getItem("rented_list");
	
	if(rentedIds){
		rentedIds = rentedIds.map(x => +x.id);
		this.list.filter(y => !rentedIds.includes(+y.id));
	}
	this.filteredList = this.list;
  }

	initMockBooks(){
		this.list = new Array();
		this.list.push({id:1, title:'The Wind\'s Twelve Quarters', author:'Ursula K. Le Guin', isbn:'221-1-45-854521-6', img_path:'assets/1.jpg'});
		this.list.push({id:2, title:'The Testaments', author:'Margaret Atwood', isbn:'978-1-13-094231-8', img_path:'assets/2.jpg'});
		this.list.push({id:3, title:'Shattered Bonds', author:'Faith Hunter', isbn:'431-8-37-376575-3', img_path:'assets/3.jpg'});
		this.list.push({id:4, title:'The Lost Causes of Bleak Creek', author:'Rhett McLaughlin', isbn:'865-3-87-895456-5', img_path:'assets/4.jpg'});
		this.list.push({id:5, title:'The Rise of Magicks', author:'Nora Roberts', isbn:'286-2-09-345333-6', img_path:'assets/5.jpg'});
		this.list.push({id:6, title:'Ninth House', author:'Leigh Bardugo', isbn:'564-1-00-235522-3', img_path:'assets/6.jpg'});
		this.list.push({id:7, title:'Dhalgren', author:'Samuel R. Delany', isbn:'745-1-84-234544-2', img_path:'assets/7.jpg'});
		this.list.push({id:8, title:'The Secret - A Treasure Hunt', author:'Sean Kelly', isbn:'445-2-88-234588-1', img_path:'assets/8.jpg'});
		this.list.push({id:9, title:'The Starless Sea', author:'Erin Morgenstern', isbn:'957-0-45-098977-1', img_path:'assets/9.jpg'});
		this.list.push({id:10, title:'The Handmaid\'s Tale', author:'Margaret Atwood', isbn:'433-1-34-456772-0', img_path:'assets/10.jpg'});
	}

	search_book(title: string){
		if(!title || title.length < 3){
			this.filteredList = this.list;
		}
		if(this.filteredList && 
			this.filteredList.map(x => x.title)
							.filter(y => y.includes(string)));
	}
}
