import { Injectable } from '@angular/core';
import { Rod } from '../Models/rod';
import { RodEntity } from '../Models/rodentity';
import { RodSegment } from '../Models/rodsegment';
import { Observable , of } from 'rxjs';
import { Force } from '../Models/force';
import { time, timeStamp } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ConstructionmanagerService {
  private text:string = "12343";
  private comment = of(this.text);
  private rod!:Rod;
  private segments!:Observable<Rod>; 
  constructor() {
    this.rod = new Rod();
    this.segments = of(this.rod);
    var f = new RodSegment();
    f.A =228;
    f.id=228;
    f.type = "rod";
    this.rod.segments.push(f);
    var f = new RodSegment();
    f.A =228;
    f.id=228;
    f.type = "rod";
    this.rod.segments.push(f);
    var g = new Force();
    g.id=229;
    g.type = "force";
    g.force= -1;
    this.rod.segments.push(g);
    this.comment.subscribe((text)=>{
      console.log("hi");
    })
  }
  logRod(){
    console.log(this.rod)
  }
  getSegments():Observable<Rod>{
    return this.segments; 
  }
  setSegments(input: Rod):void{
    this.rod = input;
  }
  addRodSegment(){
    let f = new RodSegment();
    f.S =228;
    f.id=this.rod.segments.length+1;
    f.type = "rod";
    this.rod.segments.push(f);
  }
  addForce(){
    let f = new Force();
    f.id=this.rod.segments.length+1;
    f.type = "force";
    this.rod.segments.push(f);
  }
}
 