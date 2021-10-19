import { Injectable } from '@angular/core';
import { Rod } from '../Models/rod';
import { RodEntity } from '../Models/rodentity';
import { RodSegment } from '../Models/rodsegment';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstructionmanagerService {
  private rod!:Rod;
  constructor() {
    this.rod = new Rod();
    var f = new RodSegment();
    f.id=228;
    this.rod.segments.push(f);
    var f = new RodSegment();
    f.id=229;
    this.rod.segments.push(f);
   }
  getSegments():Observable<RodEntity[]>{
    const segments = of(this.rod.segments);
    return segments; 
  }
}
 