export class CreateEstudianteDto {
    constructor (
        public nombre: String,
        public apellidos: string,
        public edad: number,
        public profesion: string,
    ){}
}
