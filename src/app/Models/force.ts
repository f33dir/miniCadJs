import { inherits } from "util"
import { RodEntity } from "./rodentity"

export class Force implements RodEntity {
    forceVector!: number
}