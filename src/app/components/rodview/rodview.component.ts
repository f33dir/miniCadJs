import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Rod } from 'src/app/Models/rod';
import { RodSegment } from 'src/app/Models/rodsegment';
import { ConstructionmanagerService } from 'src/app/services/constructionmanager.service';

@Component({
  selector: 'app-rodview',
  templateUrl: './rodview.component.html',
  styleUrls: ['./rodview.component.css']
})
export class RodviewComponent implements OnChanges {
  @Input()
  rod!:Rod
  minRodA!:number;
  minRodS!:number;
  constructor(private construction: ConstructionmanagerService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.minRodA = 100000;
    this.minRodS = 100000;
    for (let index = 0; index < this.rod.segments.length; index++) {
      let element = this.rod.segments[index];
      if(element.type === "rod"){
        let  a = (element as RodSegment)
        if(a.A<this.minRodA){
          this.minRodA = a.A;
        }
        if(a.S<this.minRodS){
          this.minRodS = a.S;
        }
      }
    }
  }
  ngOnChange(){
    this.minRodA = 100000;
    this.minRodS = 100000;
    for (let index = 0; index < this.rod.segments.length; index++) {
      let element = this.rod.segments[index];
      if(element.type === "rod"){
        let  a = (element as RodSegment)
        if(a.A<this.minRodA){
          this.minRodA = a.A;
        }
        if(a.S<this.minRodS){
          this.minRodS = a.S;
        }
      }
    }
  }
  
}
