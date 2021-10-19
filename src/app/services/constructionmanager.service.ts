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
  constructor() { }
  getSegments():Observable<RodEntity[]>{
    const segments = of(this.rod.segments);
    return segments; 
  }
}
 