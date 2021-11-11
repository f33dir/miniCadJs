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
  minRodA!:number;
  @Input()
  minRodS!:number;
  @Input()
  segment!: RodEntity;
  model!: RodSegment;
  constructor() { }
  ngOnInit(): void {
    this.model = this.segment as RodSegment;
  }
  getStyle(){
    // console.log((this.model.A/this.minRodA)*64);
    // console.log((this.model.S/this.minRodS)*64);
    return {
     'width.px':(this.model.A/this.minRodA)*64,
     'height.px':(this.model.S/this.minRodS)*64 
    }
  }
}
