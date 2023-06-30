export class Lista {
    id?:number;
    nombreLista: string;
    slogan: string;
    propuestas: string;
    color:string;
    numeroLista:number;
    imagenLogo: string;

    constructor(nombreLista: string, slogan: string, propuestas: string, color:string, numeroLista:number, imagenLogo: string){
        this.nombreLista = nombreLista;
        this.slogan = slogan;
        this.propuestas = propuestas;
        this.color = color;
        this.numeroLista = numeroLista;
        this.imagenLogo = imagenLogo;
    }
}
