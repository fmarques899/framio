import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Navbar-Search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent implements OnInit {

  public isActivated: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  triggerSearch() {
    this.isActivated = true;
  }

  cancelSearch() {
    this.isActivated = false;
  }

}
