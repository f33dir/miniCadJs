import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbutton',
  templateUrl: './textbutton.component.html',
  styleUrls: ['./textbutton.component.css']
})
export class TextbuttonComponent implements OnInit {
  @Input()
  textInput!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
