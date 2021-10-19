import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment-list-element',
  templateUrl: './segment-list-element.component.html',
  styleUrls: ['./segment-list-element.component.css']
})
export class SegmentListElementComponent implements OnInit {
  @Input()
  type!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
