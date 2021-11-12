import { RodEntity } from "./rodentity";

export class Rod{
    idCounter = 0;
    segments!: RodEntity[]; 
    tPointLeft!: boolean;
    tPointRight!: boolean;
    constructor(){
        this.segments = new Array<RodEntity>(); 
        this.tPointLeft =true;
        this.tPointRight = true;
    }
}