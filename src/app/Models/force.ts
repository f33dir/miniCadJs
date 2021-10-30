import { inherits } from "util"
import { RodEntity } from "./rodentity"

export class Force implements RodEntity {
    id!: number
    type!: string
    force!: number
    
}