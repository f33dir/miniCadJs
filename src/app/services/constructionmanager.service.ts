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
    this.rod.tPointLeft=true;
    this.rod.tPointRight=true;
  }
  logRod(){
    console.log(this.rod)
  }
  getSegments():Observable<Rod>{
    return of(this.rod); 
  }
  setSegments(input: Rod):void{
    this.rod = input;
  }
  addRodSegment(){
    let f = new RodSegment();
    f.S =1;
    f.A =1;
    f.id=this.rod.idCounter++;
    f.type = "rod";
    this.rod.segments.push(f);
  }
  addForce(){
    let f = new Force();
    f.id=this.rod.segments.length+1;
    f.force =1;
    f.type = "force";
    this.rod.segments.push(f);
  }
  deleteElement(id:number){
    let i = 0;
    while(this.rod.segments[i].id!=id && i<this.rod.segments.length+1){
      i++;
    }
    if(i!=this.rod.segments.length+1){
      this.rod.segments.splice(i,1)
    }
  }
}
 