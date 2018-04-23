import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'TextInput',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  label: string = "";
  constructor() { }

  ngOnInit() {

  }

  private chec

}
