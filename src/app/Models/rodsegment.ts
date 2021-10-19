import { inherits } from "util";
import { RodEntity } from "./rodentity";

export class RodSegment implements RodEntity{
    S!:number;
    L!:number;
    force!: number;
}