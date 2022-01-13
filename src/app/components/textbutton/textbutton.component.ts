import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textbutton',
  templateUrl: './textbutton.component.html',
  styleUrls: ['./textbutton.component.css']
})
export class TextbuttonComponent implements OnInit {
  @Output() outputClick = new EventEmitter();
  @Input()
  textInput!:string;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log('1');
    this.outputClick.emit();
}
}
