import { inherits } from "util";
import { Force } from "./force";
import { RodEntity } from "./rodentity";

export class RodSegment implements RodEntity{
    id!: number;
    type!: string;
    S!:number;
    L!:number;
    force!: number;
    
}