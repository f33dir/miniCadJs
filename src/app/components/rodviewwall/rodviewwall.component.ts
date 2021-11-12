import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodviewwall',
  templateUrl: './rodviewwall.component.html',
  styleUrls: ['./rodviewwall.component.css']
})
export class RodviewwallComponent implements OnInit {

  @Input()
  status!:boolean;
  @Input()
  side!:boolean;
  constructor() { }

  ngOnInit(): void {
    // debugger
  }

}
