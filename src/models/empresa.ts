import { Tracing } from "trace_events"

export class Empresa {
    constructor (
        public id: number,
        public nombre: String,
        public sitioWeb: string,
        public tipo: Tracing[],
    ){}
}