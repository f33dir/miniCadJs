import { Component, Input, OnInit } from '@angular/core';
import { get } from 'https';
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
  getBackground(): string {
    if(this.model.force>0){
      return "assets/greenarrow.png"
    } else if(this.model.force<0){
      return "assets/redarrow.png"
    } else {
      return ""
    }
  }
  getStyle(){
    // console.log((this.model.A/this.minRodA)*64);
    // console.log((this.model.S/this.minRodS)*64);
    return {
     'width.px':(this.model.A/this.minRodA)*64,
     'height.px':(this.model.S/this.minRodS)*64,
     'background-image':'url('+this.getBackground()+')',
     'background-repeat': "repeat no-repeat",
     "background-position": "center" 
    }
  }
}
