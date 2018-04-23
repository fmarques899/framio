import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Navbar-Search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  triggerSearch() {
    console.log("Trigged!");
  }

}
