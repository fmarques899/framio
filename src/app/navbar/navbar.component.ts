import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  backgroundColor: string;

  @Input()
  textColor: string;

  constructor(private colorsService: ColorsService) { }

  ngOnInit() {
    this.backgroundColor = this.colorsService.checkColor(this.backgroundColor);
    this.textColor = this.colorsService.checkColor(this.textColor);
  }

}
