import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'Rounded-Button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  public text: string;

  @Input()
  backgroundColor: string;

  @Input()
  textColor: string;

  @Input()
  hoverColor: string;

  private originalColor: string;

  constructor(private colorsService: ColorsService) { }

  ngOnInit() {
    this.backgroundColor = this.colorsService.checkColor(this.backgroundColor);
    this.textColor = this.colorsService.checkColor(this.textColor);
    this.originalColor = this.backgroundColor;
  }

  hover() {
    (this.hoverColor != undefined) ? (this.backgroundColor = this.colorsService.checkColor(this.hoverColor)) : (false);
  }

  unhover() {
    this.backgroundColor = this.colorsService.checkColor(this.originalColor);
  }
}
