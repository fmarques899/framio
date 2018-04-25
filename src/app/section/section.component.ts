import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'Section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input()
  backgroundColor: string;

  constructor() { }

  ngOnInit() {

  }

}
