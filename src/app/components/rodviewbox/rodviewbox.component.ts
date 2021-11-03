import { Component, Input, OnInit } from '@angular/core';
import { RodEntity } from 'src/app/Models/rodentity';
import { RodSegment } from 'src/app/Models/rodsegment';

@Component({
  selector: 'app-rodviewbox',
  templateUrl: './rodviewbox.component.html',
  styleUrls: ['./rodviewbox.component.css']
})
export class RodviewboxComponent implements OnInit {
  @Input()
  segment!: RodEntity;
  constructor() { }
  ngOnInit(): void {
    
  }
}
