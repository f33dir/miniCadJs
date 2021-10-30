import { Injectable } from '@angular/core';
import { Rod } from '../Models/rod';
import { RodEntity } from '../Models/rodentity';
import { RodSegment } from '../Models/rodsegment';
import { Observable , of } from 'rxjs';
import { Force } from '../Models/force';

@Injectable({
  providedIn: 'root'
})
export class ConstructionmanagerService {
  private rod!:Rod;
  constructor() {
    this.rod = new Rod();
    var f = new RodSegment();
    f.S =228;
    f.id=228;
    f.type = "rod";
    this.rod.segments.push(f);
    var f = new RodSegment();
    f.S =228;
    f.id=228;
    f.type = "rod";
    this.rod.segments.push(f);
    var g = new Force();
    g.id=229;
    g.type = "force";
    g.force= -1;
    this.rod.segments.push(g);
    this.getSegments().subscribe((segments)=>{
      console.log(segments);
    })
  }
  logRod(){
    console.log(this.rod)
  }
  getSegments():Observable<Rod>{
    const segments = of(this.rod);
    
    return segments; 
  }
}
 