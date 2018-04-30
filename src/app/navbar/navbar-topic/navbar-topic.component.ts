import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'Navbar-Topic',
  templateUrl: './navbar-topic.component.html',
  styleUrls: ['./navbar-topic.component.css']
})
export class NavbarTopicComponent implements OnInit {

  @Input()
  public text: string;

  @Input()
  public textColor: string;

  @Input()
  public hoverColor: string;

  private originalColor: string;

  constructor(private colorsService: ColorsService) { }

  ngOnInit() {
    this.textColor = this.colorsService.checkColor(this.textColor);
    this.originalColor = this.textColor;
    this.hoverColor = this.colorsService.checkColor(this.hoverColor);
  }

  hoverText() {
      this.textColor = this.hoverColor;
  }

  unhoverText() {
    this.textColor = this.originalColor;
  }



}
