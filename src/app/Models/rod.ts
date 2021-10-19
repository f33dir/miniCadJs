import { RodEntity } from "./rodentity";

export interface Rod{
    segments: RodEntity[];
    tPointLeft: boolean;
    tPointRight: boolean;
}